/* eslint-disable */

// @ts-nocheck

import { Route as rootRouteImport } from './routes/__root'
import { Route as IndexRouteImport } from './routes/index'
import { Route as AboutRouteImport } from './routes/about'
import { Route as ServicesRouteImport } from './routes/services'
import { Route as MaternityRouteImport } from './routes/maternity'
import { Route as PcosRouteImport } from './routes/pcos'
import { Route as FertilityRouteImport } from './routes/fertility'
import { Route as AppointmentRouteImport } from './routes/appointment'
import { Route as ContactRouteImport } from './routes/contact'
import { Route as FaqsRouteImport } from './routes/faqs'
import { Route as DoctorRouteImport } from './routes/doctor'
import { Route as LinksRouteImport } from './routes/links'

const IndexRoute = IndexRouteImport.update({ id: '/', path: '/', getParentRoute: () => rootRouteImport } as any)
const AboutRoute = AboutRouteImport.update({ id: '/about', path: '/about', getParentRoute: () => rootRouteImport } as any)
const ServicesRoute = ServicesRouteImport.update({ id: '/services', path: '/services', getParentRoute: () => rootRouteImport } as any)
const MaternityRoute = MaternityRouteImport.update({ id: '/maternity', path: '/maternity', getParentRoute: () => rootRouteImport } as any)
const PcosRoute = PcosRouteImport.update({ id: '/pcos', path: '/pcos', getParentRoute: () => rootRouteImport } as any)
const FertilityRoute = FertilityRouteImport.update({ id: '/fertility', path: '/fertility', getParentRoute: () => rootRouteImport } as any)
const AppointmentRoute = AppointmentRouteImport.update({ id: '/appointment', path: '/appointment', getParentRoute: () => rootRouteImport } as any)
const ContactRoute = ContactRouteImport.update({ id: '/contact', path: '/contact', getParentRoute: () => rootRouteImport } as any)
const FaqsRoute = FaqsRouteImport.update({ id: '/faqs', path: '/faqs', getParentRoute: () => rootRouteImport } as any)
const DoctorRoute = DoctorRouteImport.update({ id: '/doctor', path: '/doctor', getParentRoute: () => rootRouteImport } as any)
const LinksRoute = LinksRouteImport.update({ id: '/links', path: '/links', getParentRoute: () => rootRouteImport } as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/services': typeof ServicesRoute
  '/maternity': typeof MaternityRoute
  '/pcos': typeof PcosRoute
  '/fertility': typeof FertilityRoute
  '/appointment': typeof AppointmentRoute
  '/contact': typeof ContactRoute
  '/faqs': typeof FaqsRoute
  '/doctor': typeof DoctorRoute
  '/links': typeof LinksRoute
}
export interface FileRoutesByTo extends FileRoutesByFullPath {}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/services': typeof ServicesRoute
  '/maternity': typeof MaternityRoute
  '/pcos': typeof PcosRoute
  '/fertility': typeof FertilityRoute
  '/appointment': typeof AppointmentRoute
  '/contact': typeof ContactRoute
  '/faqs': typeof FaqsRoute
  '/doctor': typeof DoctorRoute
  '/links': typeof LinksRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: keyof FileRoutesByFullPath
  fileRoutesByTo: FileRoutesByTo
  to: keyof FileRoutesByTo
  id: keyof FileRoutesById
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  ServicesRoute: typeof ServicesRoute
  MaternityRoute: typeof MaternityRoute
  PcosRoute: typeof PcosRoute
  FertilityRoute: typeof FertilityRoute
  AppointmentRoute: typeof AppointmentRoute
  ContactRoute: typeof ContactRoute
  FaqsRoute: typeof FaqsRoute
  DoctorRoute: typeof DoctorRoute
  LinksRoute: typeof LinksRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': { id: '/'; path: '/'; fullPath: '/'; preLoaderRoute: typeof IndexRouteImport; parentRoute: typeof rootRouteImport }
    '/about': { id: '/about'; path: '/about'; fullPath: '/about'; preLoaderRoute: typeof AboutRouteImport; parentRoute: typeof rootRouteImport }
    '/services': { id: '/services'; path: '/services'; fullPath: '/services'; preLoaderRoute: typeof ServicesRouteImport; parentRoute: typeof rootRouteImport }
    '/maternity': { id: '/maternity'; path: '/maternity'; fullPath: '/maternity'; preLoaderRoute: typeof MaternityRouteImport; parentRoute: typeof rootRouteImport }
    '/pcos': { id: '/pcos'; path: '/pcos'; fullPath: '/pcos'; preLoaderRoute: typeof PcosRouteImport; parentRoute: typeof rootRouteImport }
    '/fertility': { id: '/fertility'; path: '/fertility'; fullPath: '/fertility'; preLoaderRoute: typeof FertilityRouteImport; parentRoute: typeof rootRouteImport }
    '/appointment': { id: '/appointment'; path: '/appointment'; fullPath: '/appointment'; preLoaderRoute: typeof AppointmentRouteImport; parentRoute: typeof rootRouteImport }
    '/contact': { id: '/contact'; path: '/contact'; fullPath: '/contact'; preLoaderRoute: typeof ContactRouteImport; parentRoute: typeof rootRouteImport }
    '/faqs': { id: '/faqs'; path: '/faqs'; fullPath: '/faqs'; preLoaderRoute: typeof FaqsRouteImport; parentRoute: typeof rootRouteImport }
    '/doctor': { id: '/doctor'; path: '/doctor'; fullPath: '/doctor'; preLoaderRoute: typeof DoctorRouteImport; parentRoute: typeof rootRouteImport }
    '/links': { id: '/links'; path: '/links'; fullPath: '/links'; preLoaderRoute: typeof LinksRouteImport; parentRoute: typeof rootRouteImport }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ServicesRoute,
  MaternityRoute,
  PcosRoute,
  FertilityRoute,
  AppointmentRoute,
  ContactRoute,
  FaqsRoute,
  DoctorRoute,
  LinksRoute,
}

export const routeTree = rootRouteImport._addFileChildren(rootRouteChildren)._addFileTypes<FileRouteTypes>()

import type { getRouter } from './router.tsx'
import type { startInstance } from './start.ts'
declare module '@tanstack/react-start' {
  interface Register {
    ssr: true
    router: Awaited<ReturnType<typeof getRouter>>
    config: Awaited<ReturnType<typeof startInstance.getOptions>>
  }
}
