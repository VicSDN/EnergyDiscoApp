window.addEventListener('DOMContentLoaded', () => {
  fetch('carta.json')
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById('carta-container');
      let html = '<h3>Bebidas</h3><ul>';
      data.bebidas.forEach(i => html += `<li>${i.nombre} - ${i.precio}</li>`);
      html += '</ul><h3>Raciones</h3><ul>';
      data.raciones.forEach(i => html += `<li>${i.nombre} - ${i.precio}</li>`);
      html += '</ul>';
      container.innerHTML = html;
    }).catch(err => console.error('Error cargando la carta:', err));
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(() => console.log('✅ Service Worker registrado'))
    .catch(err => console.error('❌ Error registrando SW:', err));
}

window.addEventListener('load', () => {
  window.addEventListener('scroll', () => document.body.classList.add('loaded'));
  setTimeout(() => document.body.classList.add('loaded'), 5000);
});

function isAppInstalled() {
  return window.matchMedia('(display-mode: standalone)').matches || 
         window.navigator.standalone === true;
}

function getDeviceOS() {
  const ua = navigator.userAgent.toLowerCase();
  const platform = navigator.platform.toLowerCase();
  
  if (/iphone|ipad|ipod/.test(ua) || platform === 'iphone') {
    return 'ios';
  } else if (/android/.test(ua)) {
    return 'android';
  } else {
    return 'desktop';
  }
}

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  console.log('✅ La PWA es instalable (Chromium).');
});

window.addEventListener('load', () => {
  setTimeout(() => {
    if (!isAppInstalled()) {
      mostrarBannerPWA();
    }
  }, 4000);
});

function mostrarBannerPWA() {
  if (document.getElementById('pwa-banner')) {
    return; 
  }

  const deviceOS = getDeviceOS();
  const banner = document.createElement('div');
  banner.id = 'pwa-banner';

  if (deviceOS === 'ios') {
    banner.innerHTML = `
      <div class="pwa-content">
        <button id="btn-close">✖</button>
        <h3>🔥 Instala Energy Disco</h3>
        <p>Añade nuestra app a tu pantalla de inicio:</p>
        <ol style="text-align: left; margin: 10px 20px; font-size: 14px;">
          <li>Toca el botón <strong>Compartir</strong> <span style="font-size: 18px;">⎋</span></li>
          <li>Desplázate y selecciona <strong>"Añadir a pantalla de inicio"</strong></li>
          <li>Toca <strong>"Añadir"</strong></li>
        </ol>
        <div class="pwa-buttons">
          <button id="btn-entendido">✅ Entendido</button>
        </div>
      </div>
    `;
  } else {
    const showInstallBtn = deferredPrompt ? 'block' : 'none';
    
    banner.innerHTML = `
      <div class="pwa-content">
        <button id="btn-close">✖</button>
        <h3>🔥 Energy Disco</h3>
        <p>Instala la app y activa notificaciones 🔔</p>
        <div class="pwa-buttons">
          <button id="btn-install" style="display: ${showInstallBtn};">📲 Instalar App</button>
          <button id="btn-notif">🔔 Activar Notificaciones</button>
        </div>
      </div>
    `;
  }


  document.body.appendChild(banner);

  const btnClose = document.getElementById('btn-close');
  const btnInstall = document.getElementById('btn-install');
  const btnNotif = document.getElementById('btn-notif');
  const btnEntendido = document.getElementById('btn-entendido');


  btnClose.addEventListener('click', () => {
    banner.classList.add('hidden');
    setTimeout(() => banner.remove(), 500);
  });

  if (btnEntendido) {
    btnEntendido.addEventListener('click', () => {
      banner.remove();
    });
  }

  if (btnInstall) {
    btnInstall.addEventListener('click', async () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log('Resultado instalación:', outcome);
        
        if (outcome === 'accepted') {
          console.log('✅ Usuario instaló la PWA');
          banner.remove();
        }
        
        deferredPrompt = null;
        btnInstall.style.display = 'none';
      } else {
        alert('La instalación no está disponible. Asegúrate de que estás usando Chrome, Edge u Opera.');
      }
    });
  }

  if (btnNotif) {
    btnNotif.addEventListener('click', () => {
      solicitarPermisoNotificaciones();
    });
  }
}

function solicitarPermisoNotificaciones() {
  if (typeof OneSignal === 'undefined') {
    alert('OneSignal no está disponible. Verifica tu configuración.');
    console.error('OneSignal no está definido');
    return;
  }

  window.OneSignalDeferred = window.OneSignalDeferred || [];
  OneSignalDeferred.push(async function(OneSignal) {
    try {
      const permission = await OneSignal.Notifications.requestPermission();
      
      if (permission) {
        console.log('✅ Notificaciones activadas');
        alert('¡Notificaciones activadas! Recibirás las últimas novedades de Energy Disco.');
        
        const banner = document.getElementById('pwa-banner');
        if (banner) banner.remove();
      } else {
        console.log('❌ Permiso denegado');
        alert('Permiso denegado. Puedes activar las notificaciones en la configuración de tu navegador.');
      }
    } catch (error) {
      console.error('Error al solicitar notificaciones:', error);
      
      try {
        OneSignal.Slidedown.promptPush();
      } catch (e) {
        alert('No se pudo activar las notificaciones. Inténtalo desde la configuración del navegador.');
      }
    }
  });
}


window.addEventListener('appinstalled', (evt) => {
  console.log('✅ App instalada exitosamente');
  const banner = document.getElementById('pwa-banner');
  if (banner) banner.remove();
});
