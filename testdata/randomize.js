function randomPrefix() {
  switch (Math.random()*15 | 0) {
    case 0:
      return '+255714'
    case 1:
      return '+255723'
    case 2:
      return '+255 654'
    case 3:
      return '+255712'
    case 4:
      return '+255743'
    case 5:
      return '+255742'
    case 6:
      return '+255702'
    case 7:
      return '+255 733'
    case 8:
      return '0714 '
    case 9:
      return '0723'
    case 10:
      return '0654'
    case 11:
      return '0712 '
    case 12:
      return '0743'
    case 13:
      return '0742 '
    case 14:
      return '0702'
    case 15:
      return '0733'
    default:
      throw 'error'
  }
}

export default function randomNumber() {
  let no = randomPrefix()
  for (let i = 0; i < 6; i++) {
    no = `${no}${Math.random()*10 | 0}`
  }
  return no
}
