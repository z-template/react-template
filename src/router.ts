// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

export type Path =
  | `/`
  | `/about`
  | `/list/user/($id)`
  | `/login`
  | `/nested`
  | `/nested/:categories`
  | `/nested/:categories/:subCategories`
  | `/nested/detail/:id`
  | `/nested/todo`
  | `/posts`
  | `/posts/:id`
  | `/register`

export type Params = {
  '/nested/:categories': { categories: string }
  '/nested/:categories/:subCategories': { categories: string; subCategories: string }
  '/nested/detail/:id': { id: string }
  '/posts/:id': { id: string }
}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<Path, Params, ModalPath>()
export const { redirect } = utils<Path, Params>()
