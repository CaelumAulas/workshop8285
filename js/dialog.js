// Variáveis
var btnAbreDialog = document.querySelector('#abreDialog');
var dialog = document.querySelector('.dialogNewsletter');
var dialogBody = document.querySelector('.dialogNewsletter-body');
var dialogOverlay = document.querySelector('.dialogNewsletter-overlay');

var ignore = document.querySelectorAll('main, header, footer')

btnAbreDialog.style.display = 'block'

// Quando abrir a dialog...
btnAbreDialog.addEventListener('click', function() {
  ignore.forEach(el => el.setAttribute('inert','true'))

  dialog.classList.add('dialogNewsletter--aberto');
  dialogBody.querySelector('.dialogNewsletter-campo').focus()
});

function fechandoDialog() {
  ignore.forEach(el => el.removeAttribute('inert'))

  dialog.classList.remove('dialogNewsletter--aberto');
  document.activeElement.blur()

  setTimeout(() => {
    btnAbreDialog.focus()
  }, 0)
}

// Listeners
document.querySelector('.dialogNewsletter-fechar').addEventListener('click', fechandoDialog);