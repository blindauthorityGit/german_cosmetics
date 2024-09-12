import {MdSettings} from 'react-icons/md'
import {ImTextColor} from 'react-icons/im'
import {GoHome} from 'react-icons/go'
// import Aesthetics from './icons/aesthetics'
// import Cosmetics from './icons/cosmetics'
import {GiLaserWarning} from 'react-icons/gi'
import {FaHandHoldingMedical} from 'react-icons/fa'
import {GrContact} from 'react-icons/gr'
import {GrTechnology} from 'react-icons/gr'
import {GoLaw} from 'react-icons/go'
import {ImBlog} from 'react-icons/im'
import {FaImages} from 'react-icons/fa'

export const structure = (S) =>
  S.list()
    .title('Bereiche')
    .items([
      S.listItem()
        .title('Start Settings')
        .icon(FaImages)
        .child(S.document().schemaType('start').documentId('start')),
      S.divider(),
      S.listItem()
        .title('German Aesthetics')
        .icon(Aesthetics)
        .child(
          S.list()
            .title('German Aesthetics')
            .items([
              S.listItem()
                .title('Settings')
                .icon(MdSettings)
                .child(
                  S.document().schemaType('aesthetic_settings').documentId('aesthetic_settings'),
                ),
              S.listItem()
                .title('Pages')
                .icon(ImTextColor)
                .child(
                  S.list()
                    .title('Seiten')
                    .items([
                      S.listItem()
                        .title('Home')
                        .icon(GoHome)
                        .child(
                          S.document().schemaType('aesthetic_home').documentId('aesthetic_home'),
                        ),
                      S.listItem()
                        .title('Praxis')
                        .icon(MdMeetingRoom)
                        .child(
                          S.document()
                            .schemaType('aesthetic_praxis')
                            .documentId('aesthetic_praxis'),
                        ),
                      S.listItem()
                        .title('Laserbehandlung')
                        .icon(GiLaserWarning)
                        .child(
                          S.document()
                            .schemaType('aesthetic_laserbehandlung')
                            .documentId('aesthetic_laserbehandlung'),
                        ),
                      S.listItem()
                        .title('Dermatologie')
                        .icon(FaHandHoldingMedical)
                        .child(
                          S.document()
                            .schemaType('aesthetic_dermatologie')
                            .documentId('aesthetic_dermatologie'),
                        ),
                    ]),
                ),
              S.listItem()
                .title('Kontakt')
                .icon(GrContact)
                .child(
                  S.document().schemaType('aesthetic_kontakt').documentId('aesthetic_kontakt'),
                ),
              S.listItem()
                .title('Komponente')
                .icon(GrTechnology)
                .child(
                  S.document()
                    .schemaType('aesthetic_komponente')
                    .documentId('aesthetic_komponente'),
                ),
            ]),
        ),
      S.divider(),
      S.listItem()
        .title('German Cosmetics')
        .icon(Cosmetics)
        .child(
          S.list()
            .title('German Cosmetics')
            .items([
              S.listItem()
                .title('Settings')
                .icon(MdSettings)
                .child(
                  S.document().schemaType('cosmetics_settings').documentId('cosmetics_settings'),
                ),
              S.listItem()
                .title('Pages')
                .icon(ImTextColor)
                .child(
                  S.list()
                    .title('Seiten')
                    .items([
                      S.listItem()
                        .title('Home')
                        .icon(GoHome)
                        .child(
                          S.document().schemaType('cosmetics_home').documentId('cosmetics_home'),
                        ),
                      S.listItem()
                        .title('Praxis')
                        .icon(MdMeetingRoom)
                        .child(
                          S.document()
                            .schemaType('aesthetic_praxis')
                            .documentId('aesthetic_praxis'),
                        ),
                      S.listItem()
                        .title('Behandlungen')
                        .icon(GiLaserWarning)
                        .child(
                          S.document()
                            .schemaType('cosmetics_behandlung')
                            .documentId('cosmetics_behandlung'),
                        ),
                      S.listItem()
                        .title('Produkte')
                        .icon(FaHandHoldingMedical)
                        .child(
                          S.document()
                            .schemaType('cosmetics_produkte')
                            .documentId('cosmetics_produkte'),
                        ),
                    ]),
                ),
              S.listItem()
                .title('Kontakt')
                .icon(GrContact)
                .child(
                  S.document().schemaType('cosmetics_kontakt').documentId('cosmetics_kontakt'),
                ),
              S.listItem()
                .title('Komponente')
                .icon(GrTechnology)
                .child(
                  S.document()
                    .schemaType('cosmetics_komponente')
                    .documentId('cosmetics_komponente'),
                ),
            ]),
        ),
      S.divider(),
      S.listItem()
        .title('Blog Settings')
        .icon(ImBlog)
        .child(S.document().schemaType('blog_settings').documentId('blog_settings')),
      S.divider(),
      S.listItem()
        .title('Impressum')
        .icon(GoLaw)
        .child(S.document().schemaType('impressum').documentId('impressum')),
      S.listItem()
        .title('Datenschutz')
        .icon(GoLaw)
        .child(S.document().schemaType('datenschutz').documentId('datenschutz')),
      S.divider(),
      S.listItem()
        .title('Gutschein')
        .icon(GoLaw)
        .child(S.document().schemaType('gutschein').documentId('gutschein')),
      S.divider(),
      S.listItem()
        .title('Start Modal')
        .child(S.document().schemaType('modalGeneral').documentId('modalGeneral')),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'aesthetic_settings',
            'aesthetic_praxis',
            'aesthetic_laserbehandlung',
            'aesthetic_dermatologie',
            'aesthetic_home',
            'cosmetics_settings',
            'cosmetics_home',
            'cosmetics_kontakt',
            'cosmetics_behandlung',
            'cosmetics_produkte',
            'gutschein',
          ].includes(listItem.getId()),
      ),
    ])
