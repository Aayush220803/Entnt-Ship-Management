export function addNotification(message) {
  const notifications = JSON.parse(localStorage.getItem('notifications')) || [];
  const newNotification = {
    id: Date.now().toString(),
    message,
    createdAt: new Date().toISOString(),
  };
  notifications.push(newNotification);
  localStorage.setItem('notifications', JSON.stringify(notifications));
}
