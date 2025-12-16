const socket = io();

let notificationInterval;

function startNotifications() {
  if ('Notification' in window) {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        notificationInterval = setInterval(() => {
          new Notification('Instagram', {
            body: 'You have a new notification!',
            icon: 'https://www.instagram.com/static/images/ico/favicon-192.png'
          });
        }, 1000); // Every second
      }
    });
  }
}

function stopNotifications() {
  if (notificationInterval) {
    clearInterval(notificationInterval);
  }
}

socket.on('stop-notifications', () => {
  console.log('Stopping notifications');
  stopNotifications();
});

// Start notifications on page load
window.onload = () => {
  startNotifications();
};