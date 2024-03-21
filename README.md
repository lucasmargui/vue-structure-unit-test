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

## it

- renderiza uma lista de usuários
- busca a lista de usuários na criação do componente

### Mockando a chamada da API Externa


Essa função de mock substitui a função 'get' do Axios, isso garante que ao tentar fazer uma solicitação GET, ela retornará os dados abaixo.

```
jest.mock('axios', () => ({
    get: jest.fn(() => Promise.resolve({ data: [{ id: 1, name: 'User 1' }, { id: 2, name: 'User 2' }] }))
  }));
```

### beforeEach 

No início de cada chamada de teste é realizado a montagem de componente em memória 

```
wrapper = mount(ApiComponent);
```

### afterEach 

Ao final de cada teste é realizado uma limpeza de todos os mocks de jest

```
jest.clearAllMocks();
```

### test: renderiza uma lista de usuários

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/a2998d41-2aae-4502-94bf-823daf413f50)

### test: busca a lista de usuários na criação do componente

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/23bcfb7a-ead6-44b9-81cc-c75a69e80f40)


# Implementação dos testes componente computed-evento

## Importações

```
import { mount } from '@vue/test-utils';
import ComputedComponent from '../ComputedComponent.vue';
```

## it

- calcula o nome completo corretamente
- reage a mudanças no firstName e lastName
- valida o tamanho de firstName e lastName
- calcula o comprimento do nome completo corretamente
- trata o firstName e lastName nulos ou vazios


### test: calcula o nome completo corretamente

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/ec9ebdc3-fd89-41e5-8300-35f05e9bcd55)


### test: reage a mudanças no firstName e lastName

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/8ab287fe-ddc4-4fcd-ac65-d8819bb87ac7)


### test: valida o tamanho de firstName e lastName

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/ddb0c6b0-f2bc-49de-ae43-8a6fdeeceebc)


### test: calcula o comprimento do nome completo corretamente

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/62349b9a-c9d0-4ada-87fc-a9605f1eb337)


### test: trata o firstName e lastName nulos ou vazios

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/5a93ccd9-68ea-4993-92ed-0aa6dd56ed6a)


# Implementação dos testes componente form

## Importações

```
import { mount } from '@vue/test-utils';
import FormComponent from '../FormComponent.vue';
```

## it

- deve atualizar corretamente o modelo quando os campos são preenchidos
- deve exibir mensagem de erro ao enviar formulário com campos em branco
- deve exibir mensagem de erro para campo de nome em branco
- deve exibir mensagem de erro para campo de e-mail em branco
- deve exibir mensagem de erro para formato inválido de e-mail
- deve limpar os campos após envio bem-sucedido do formulário

# Implementação dos testes componente interacao-componente-pai-filho

## Importações

```
import { mount } from '@vue/test-utils';
import InteracaoComponente from '../InteracaoComponente.vue'
import ChildComponente from '../ChildComponente.vue';
```

## it

- renderiza o componente filho com as props corretas
- passa propriedades para o ChildComponente e trata eventos dele

# Implementação dos testes componente login

## Importações

```
import { mount } from '@vue/test-utils';
import LoginComponent from '../LoginComponent.vue';
```

## it

- define os dados de email e senha quando o input é alterado
- chama o método de login quando o formulário é enviado
- exibe mensagem de erro se o email ou a senha estiverem faltando
- displays error message for invalid credentials
- faz login com sucesso com credenciais válidas

# Implementação dos testes componente manipulacao-estado-vuex

## Importações

```
import { mount } from '@vue/test-utils';
import { createStore } from 'vuex'
import EstadoComponente from '../EstadoComponente.vue';
```

## it

- verifica se o contador está em 0
- verifica se o botão de incremento está presente
- verifica se o botão de decremento está presente
- verifica se clicar no botão de incremento incrementa o contador
- verifica se clicar no botão de decremento decrementa o contador
- verifica se o componente exibe a mensagem de carregamento quando está carregando
- verifica se o componente exibe uma mensagem de erro quando ocorre um erro

# Implementação dos testes componente manipulacao-evento

## Importações

```
import { mount , shallowMount } from '@vue/test-utils'
import ButtonCounter from '../ManipulacaoEvento.vue'
```

## it

- incrementa o contador ao clicar no botão
- reseta o contador ao clicar no botão "Redefinir
- altera o texto quando o botão é clicado


# Implementação dos testes componente mounted-evento

## Importações

```
import { mount } from '@vue/test-utils';
import CalculateComponent from '../CalculateComponent.vue';
```

## it

- calcula e exibe a soma corretamente quando montado

# Implementação dos testes componente renderiza-componente

## Importações

```
import { mount } from '@vue/test-utils'
import HelloWorld from '../RenderizaComponente.vue'
``` 

## it

- renderiza corretamente com a mensagem passada e descrição
- renderiza corretamente sem mensagem e com estilo padrão

# Implementação dos testes componente renderiza-condicional

## Importações

```
import { mount } from '@vue/test-utils';
import CondicionalComponente from '../CondicionalComponente.vue';

```

## it

- renderiza a mensagem quando mostrarMensagem é verdadeiro

- não renderiza a mensagem quando mostrarMensagem é falso

# Implementação dos testes componente rotas

## Importações

```
import { mount } from '@vue/test-utils'
import HomeComponente from '../HomeComponente.vue'
import routes from '@/router/'
```

## it

- renderiza o componente Home ao navegar para /

