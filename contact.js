document.addEventListener('submit', function (e) {
  const form = e.target;
  if (!form || !form.classList.contains('contact-form')) return;
  e.preventDefault();

  const prenom = form.prenom.value.trim();
  const nom = form.nom.value.trim();
  const sujet = form.sujet.value.trim();
  const message = form.message.value.trim();

  if (!prenom || !nom || !sujet || !message) {
    alert('Veuillez remplir tous les champs du formulaire.');
    return;
  }
  alert('Merci — votre message est prêt à être envoyé !');
  form.reset();
});
