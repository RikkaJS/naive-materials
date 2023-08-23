import type { App } from 'vue'

type ComponentType = any

interface NUiCreateOptions {
  components?: ComponentType[]
  componentPrefix?: string
}

function create({
  componentPrefix = '',
  components = [],
}: NUiCreateOptions = {}) {
  const installTargets: App[] = []
  function registerComponent(
    app: App,
    name: string,
    component: ComponentType,
  ): void {
    const registered = app.component(componentPrefix + name)
    if (!registered)
      app.component(componentPrefix + name, component)
  }
  function install(app: App): void {
    if (installTargets.includes(app))
      return
    installTargets.push(app)
    components.forEach((component) => {
      const { name, alias } = component
      registerComponent(app, name, component)
      if (alias) {
        alias.forEach((aliasName: string) => {
          registerComponent(app, aliasName, component)
        })
      }
    })
  }
  return {
    componentPrefix,
    install,
  }
}

export default create
