function navegator() {
  const navegador = {
    webkit: navigator.userAgent.toLowerCase().indexOf('chrome') > -1,
    moz: navigator.userAgent.toLowerCase().indexOf('firefox') > -1,
    edge: navigator.userAgent.toLowerCase().indexOf('safari') > -1
  }
  if(navegador.webkit) return "chrome"
  else if(navegador.moz) return "moz"
  else if(navegador.edge) return "safari"
}

export default navegator;