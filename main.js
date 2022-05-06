window.addEventListener('scroll', onScroll)

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}
onScroll()

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  /* ========= VERIFICAR SE A SEÇÃO PASSOU DA LINHA ============ */
  const sectionTop = section.offsetTop

  const sectionheight = section.offsetHeight

  // O topo da seção chegou ou utrapassou a linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  /* ======= VERIFICAR SE A BASE ESTÁ ABAIXO DA LINHA ALVO  ========= */
  const sectionEndsAt = sectionTop + sectionheight

  // O final da seção passou da linha alvo
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  /* ======== LIMITES DA SEÇÂO =========== */
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function removeMenu() {
  document.body.classList.remove('menu-expanded')
}

function openCloseMenu() {
  document.body.classList.toggle('menu-expanded')
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

openMenu.addEventListener('click', openCloseMenu)
closeMenu.addEventListener('click', removeMenu)

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
#home, 
#home img, 
#home .stats, 
#services,
#services header,
#services .card,
#about,
#about header,
#about .content
#contact,
#contact header,
#contact .content`)
