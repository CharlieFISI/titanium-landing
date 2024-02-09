import { getPermalink } from './utils/permalinks';
export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: getPermalink('/'),
    },
    {
      text: 'Planes',
      href: getPermalink('/pricing'),
    },
    {
      text: 'Contactenos',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Intranet', href: '#' }],
};

export const footerData = {
  links: [
    {
      title: 'TitaniumGym',
      links: [
        { text: '¿Quiénes somos?', href: getPermalink('/#content') },
        { text: '¿Qué te ofrecemos?', href: getPermalink('/#features') },
        { text: 'Blog', href: getPermalink('/#blogs') },
        { text: 'FAQ', href: getPermalink('/#faqs') },
      ],
    },
    {
      title: 'Planes',
      links: [
        { text: 'Conoce nuestros planes', href: '#' },
        { text: 'Ofertas', href: '#' },
      ],
    },
    {
      title: 'Contacto',
      links: [
        { text: 'Ubicación', href: '#' },
        { text: 'Horarios', href: '#' },
        { text: 'Contáctenos', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: '#' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://avatars.akamai.steamstatic.com/b62d4afa0b6723bd8e8c5289e184172e9ea56a17_full.jpg)]"></span>
    Hecho por <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/"> DTC</a> · Todos los derechos reservados.
  `,
};
