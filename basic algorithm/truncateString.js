function truncateString(str, num) {
  // Clear out that junk in your trunk

  if (str.length > num && num > 3) {
    return str.slice(0, (num -3)) + '...';
  } else if (str.length > num && num <= 3) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }


  console.log(str);
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", "one");
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);