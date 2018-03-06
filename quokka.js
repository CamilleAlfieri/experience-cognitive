const mangerBebe = (nom) => {
  if(nom !== 'Michel'){
    return mangerMaman()
  }
  console.log('Bebe mangé')
  return 5
}

const mangerMaman = () => {
  return 6
}

mangerBebe('Miche')//?