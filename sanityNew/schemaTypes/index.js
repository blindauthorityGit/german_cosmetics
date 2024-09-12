// Import schema types from any plugins that might expose them
import aesthetic_hero from './aesthetics/home/hero'
import raeumlichkeiten from './aesthetics/home/raeumlichkeiten'
import imageBox from './aesthetics/home/imageBox'
import home from './aesthetics/home/all'
import aesthetic_praxis from './aesthetics/praxis/praxis'
import laserbehandlung from './aesthetics/objects/laserbehandlung'
import aesthetic_laserbehandlung from './aesthetics/laserbehandlung'
import aesthethic_laserbehandlung_category from './aesthetics/category/laserbehanldung'
import aesthetic_dermatologie from './aesthetics/dermatologie'
import dermatologieBehandlung from './aesthetics/objects/dermatologieBehandlung'
import aesthetic_settings from './aesthetics/settings'
import aesthetic_kontakt from './aesthetics/kontakt'
import aesthetics_imageBox from './aesthetics/komponente/imageBox'
import aesthetic_komponente from './aesthetics/komponente/'
import blogEntry from './main/news/blogEntry'
import teamMember from './aesthetics/komponente/teamMember'
import catBehandlung from './aesthetics/objects/catBehandlung'
import blogSettings from './main/blogSettings'
import jobs from './main/jobs'
import impressum from './main/impressum'
import datenschutz from './main/datenschutz'

import cosmetics_settings from './cosmetics/settings'
import cosmetics_home from './cosmetics/home/all'
import cosmetics_kontakt from './cosmetics/kontakt'
import cosmetics_komponente from './cosmetics/komponente/'
import cosmetics_imageBox from './cosmetics/komponente/imageBox'
import behandlung from './cosmetics/objects/behandlung'
import cosmetics_behandlung from './cosmetics/behandlungen/'
import cosmetics_produkte from './cosmetics/produkte'
import produkt from './cosmetics/objects/produkt'
import produktKategorie from './cosmetics/objects/produktKategorie'

import modalGeneral from './main/modalGeneral'
import gutschein from './main/gutschein'
import start from './main/start'

// Export schema types directly
export const schemaTypes = [
  home,
  aesthetic_praxis,
  aesthetic_laserbehandlung,
  laserbehandlung,
  aesthethic_laserbehandlung_category,
  aesthetic_dermatologie,
  dermatologieBehandlung,
  aesthetic_settings,
  aesthetic_kontakt,
  aesthetics_imageBox,
  aesthetic_komponente,
  blogEntry,
  teamMember,
  catBehandlung,
  blogSettings,
  jobs,
  impressum,
  datenschutz,
  modalGeneral,
  cosmetics_settings,
  cosmetics_home,
  cosmetics_kontakt,
  cosmetics_komponente,
  cosmetics_imageBox,
  behandlung,
  cosmetics_behandlung,
  cosmetics_produkte,
  produkt,
  start,
  produktKategorie,
  gutschein,
]
