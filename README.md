# Savana Design System

## Descrição

O **Savana Design System** é uma coleção unificada de componentes reutilizáveis, padrões de design e diretrizes para garantir consistência e eficiência em todos os produtos digitais da Savana. Este sistema foi desenvolvido para facilitar a criação de interfaces coesas e intuitivas, promovendo uma experiência de usuário excepcional.

## Sumário

- [Instalação](#instalação)
- [Uso](#uso)
---

### Instalação

```markdown
Você pode instalar o Savana Design System via npm ou yarn.
````

#### npm

```bash
npm install @savana/ui
```

#### yarn

```bash
yarn add @savana/ui
```

### Uso

```markdown
Depois de instalar, você pode começar a usar os componentes do design system em seu projeto.
````

#### Exemplo

```jsx
import { Button } from 'savana-design-system';

const App = () => (
  <div>
    <Button
      label="Clique aqui"
      onClick={() => alert('Botão clicado!')}
    />
  </div>
);

export default App;
```
