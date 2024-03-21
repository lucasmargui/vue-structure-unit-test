<H1 align="center">Teste Unitário Jest </H1>
<p align="center">🚀 Teste unitário utilizando jest para referências futuras</p>

## Criando o Projeto

```
vue create vue-tests
```

Opção Vue 3 com Babel e Eslint

## Configurando Ferramentas de Teste

### Instalação dos pacotes
```
vue add unit-jest
```

```
npm install --save-dev @vue/test-utils
```

```
npm i axios
```

```
npm install vue-router@3
```

### Configurando package.json

```
"scripts": {
...
  "test:watch": "jest --verbose --watch"
}

```

### Criação do diretório __test__

Para realização dos testes do componente iremos criar um diretório __tests__.

<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/ad638b2d-59b7-4f12-a3f2-0cfb0bd89dda" style="width:100%">
</div>


# Implementação dos testes componente SearchInput

<details>
  <summary>Clique para mostrar conteúdo</summary>



## Importações
```
import { mount } from '@vue/test-utils'; // Importando a função mount da biblioteca Vue test utils
import SearchInput from '../SearchInput.vue'; // Importando o componente SearchInput a ser testado
```

- Importando a função mount da biblioteca @vue/test-utils. Esta função é utilizada para montar componentes Vue em um ambiente de teste, permitindo a interação e inspeção desses componentes durante os testes unitários ou de integração.

- Importando o componente SearchInput.vue para teste


## describe 
```
describe('search-input - Unit', () => { 
```

Descrevendo o conjunto de testes para o componente SearchInput

## it

- it('deve ser uma instância Vue', () => { 
- it('deve atualizar searchQuery quando o valor da prop é alterado', async () => {
- it('deve emitir o evento de input quando algo é digitado', async () => {
- it('deve limpar o valor do input quando o ícone X é clicado', async () => { 


Casos de teste para verificar.


###  it('deve ser uma instância Vue'

<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/e9841098-3910-4811-a594-65b21ee8c7ca" style="width:100%">
</div>

###  it('deve atualizar searchQuery quando o valor da prop é alterado'

<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/58f7fb97-ce5a-40a5-8724-7fb0fc1adb76" style="width:100%">
</div>

###  it('deve emitir o evento de input quando algo é digitado',

<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/20054262-00cb-452d-89a8-714a85204e35" style="width:100%">
</div>

###  it('deve limpar o valor do input quando o ícone X é clicado'

<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/5991ee8f-1696-4c29-aa65-c654a8c4ed9d" style="width:100%">
</div>

</details> 


# Implementação dos testes api-client

## Importações

```
import { mount } from '@vue/test-utils';
import ApiComponent from '../ApiComponent.vue';
```

## describe 

## it

# Implementação dos testes componente computed-evento

## Importações

```
import { mount } from '@vue/test-utils';
import ComputedComponent from '../ComputedComponent.vue';
```

## describe 

## it

# Implementação dos testes componente form

## Importações

```
import { mount } from '@vue/test-utils';
import FormComponent from '../FormComponent.vue';
```

## describe 

## it

# Implementação dos testes componente interacao-componente-pai-filho

## Importações

```
import { mount } from '@vue/test-utils';
import InteracaoComponente from '../InteracaoComponente.vue'
import ChildComponente from '../ChildComponente.vue';
```

## describe 

## it

# Implementação dos testes componente login

## Importações

```
import { mount } from '@vue/test-utils';
import LoginComponent from '../LoginComponent.vue';
```

## describe 

## it

# Implementação dos testes componente manipulacao-estado-vuex

## Importações

```
import { mount } from '@vue/test-utils';
import { createStore } from 'vuex'
import EstadoComponente from '../EstadoComponente.vue';
```

## describe 

## it

# Implementação dos testes componente manipulacao-evento

## Importações

```
import { mount , shallowMount } from '@vue/test-utils'
import ButtonCounter from '../ManipulacaoEvento.vue'
```

## describe 

## it

# Implementação dos testes componente mounted-evento

## Importações

```
import { mount } from '@vue/test-utils';
import CalculateComponent from '../CalculateComponent.vue';
```

## describe 

## it

# Implementação dos testes componente renderiza-componente

## Importações

```
import { mount } from '@vue/test-utils'
import HelloWorld from '../RenderizaComponente.vue'
```

## describe 

## it

# Implementação dos testes componente renderiza-condicional

## Importações

```
import { mount } from '@vue/test-utils';
import CondicionalComponente from '../CondicionalComponente.vue';

```

## describe 

## it

# Implementação dos testes componente rotas

## Importações

```
import { mount } from '@vue/test-utils'
import HomeComponente from '../HomeComponente.vue'
import routes from '@/router/'
```

## describe 

## it

