const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function getHourText(currentHour) {
  if (currentHour < 5) {
    return 'Late Night';
  }
  if (currentHour < 12) {
    return 'Morning';
  }
  if (currentHour < 16) {
    return 'Afternoon';
  }
  if (currentHour < 20) {
    return 'Evening';
  }
  return 'Night';
}

const introDynamicText = () => {
  const date = new Date();
  const dayMessage = weekDays[date.getDay()] || 'Day';
  const hourMessage = getHourText(date.getHours());

  return `Happy ${dayMessage} and Good ${hourMessage}!`;
};

export default introDynamicText;
