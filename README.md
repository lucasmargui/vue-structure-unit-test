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

### test: deve atualizar corretamente o modelo quando os campos são preenchidos

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/ed996d7f-5efb-44bf-912e-004dd43e3c92)


### test: deve exibir mensagem de erro ao enviar formulário com campos em branco

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/6beda36c-4a30-4211-a9f9-4561ef463e36)

### test: deve exibir mensagem de erro para campo de nome em branco

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/1ac52b12-a44e-44cb-bc4c-2dd8c22c8042)

### test: deve exibir mensagem de erro para campo de e-mail em branco

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/51c77b4c-e1a7-4fff-a17f-545a1f4b7df8)

### test: deve exibir mensagem de erro para formato inválido de e-mail

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/6cdcd798-d640-4ab3-90fb-bd13931ba4c8)

### test: deve limpar os campos após envio bem-sucedido do formulário

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/6d888083-c658-4459-ab09-a2dc1bbc44d7)

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

### test: renderiza o componente filho com as props corretas

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/5140c3e6-134a-4e68-8af1-5223c6f51a44)

### test: passa propriedades para o ChildComponente e trata eventos dele

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/32c76277-c9fa-4da6-9c07-8c13aee4bd6d)

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

### test: define os dados de email e senha quando o input é alterado

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/3b057729-7f94-4110-b858-4838e80fe4f0)

### test: chama o método de login quando o formulário é enviado

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/f644983a-d589-4027-93bc-5e0c13466923)

### test: exibe mensagem de erro se o email ou a senha estiverem faltando

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/edd93bc6-1989-49b2-9bf4-b0d094da903f)

### test: displays error message for invalid credentials

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/f0b5852e-84e0-4c4e-aa15-d929369769f8)

### test: faz login com sucesso com credenciais válidas

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/4a3f4dca-223a-4ed5-a5f0-2d78e6edf4a8)


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

### beforeEach(()

Antes de cada teste unitário é criado uma fake store

```
 fakestore = createStore({
```
E as actions incrementAsync e decrementAsync são substituidas pela criação de 2 funções mocks com uma implementação semelhante com a original

```
incrementAsync: jest.fn().mockImplementation(({ commit }) => { ...

```

```
decrementAsync: jest.fn().mockImplementation(({ commit }) => { ...

```

E por ultimo é criado um wrapper passando o fake store como plugin

```
 wrapper = mount(EstadoComponente, {
    global: {
      plugins: [fakestore],
    },
  });

```


### test: verifica se o contador está em 0

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/1cc1ef5c-1c95-4758-b094-152a07b7bbf3)

### test: verifica se o botão de incremento está presente

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/bfe4d070-f1e8-4af9-869b-bb63fb019242)

### test: verifica se o botão de decremento está presente

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/50468f46-96fd-4bf5-a12b-3db46b825ee2)

### test: verifica se clicar no botão de incremento incrementa o contador

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/23b11f1e-5846-4127-b0cd-dfe554453f8a)

### test: verifica se clicar no botão de decremento decrementa o contador

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/1abbf73a-abb5-4d66-b523-1a4c33f5986f)

### test: verifica se o componente exibe a mensagem de carregamento quando está carregando

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/f5c3d589-3004-43d8-80d3-47c03edb6218)

### test: verifica se o componente exibe uma mensagem de erro quando ocorre um erro

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/4549aace-56a3-44a2-805b-0c937be6b800)

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


### test: incrementa o contador ao clicar no botão

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/7e40433c-d584-4af1-908d-da1f1b489b20)

### test: reseta o contador ao clicar no botão "Redefinir

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/ddf8dcc9-96c2-405f-b372-e51d0edd09c3)


### test: altera o texto quando o botão é clicado

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/42a3b4bd-aa58-494d-8d33-c796b610c9fd)

# Implementação dos testes componente mounted-evento

## Importações

```
import { mount } from '@vue/test-utils';
import CalculateComponent from '../CalculateComponent.vue';
```

## it

- calcula e exibe a soma corretamente quando montado

### test: calcula e exibe a soma corretamente quando montado

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/a6cfb4c1-63e2-4414-a8c2-fd74c4d95721)

# Implementação dos testes componente renderiza-componente

## Importações

```
import { mount } from '@vue/test-utils'
import HelloWorld from '../RenderizaComponente.vue'
``` 

## it

- renderiza corretamente com a mensagem passada e descrição
- renderiza corretamente sem mensagem e com estilo padrão

### test: renderiza corretamente com a mensagem passada e descrição

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/86fe3ba7-8962-44d9-afff-20f72edb6c60)

### test: renderiza corretamente sem mensagem e com estilo padrão

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/b84f0599-6abd-4f6e-a6c4-6049c84ac5d2)


# Implementação dos testes componente renderiza-condicional

## Importações

```
import { mount } from '@vue/test-utils';
import CondicionalComponente from '../CondicionalComponente.vue';

```

## it

- renderiza a mensagem quando mostrarMensagem é verdadeiro
- não renderiza a mensagem quando mostrarMensagem é falso


Const wrapper foi montado fora do escopo de cada teste para que cada teste utilize o mesmo componente na memória virtual, simulando um toggle

```
const wrapper = mount(CondicionalComponente);
```

### test: renderiza a mensagem quando mostrarMensagem é verdadeiro

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/169c1b57-cecc-4aeb-bad5-cbdfcb4446b2)

### test: não renderiza a mensagem quando mostrarMensagem é falso

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/d564bd0d-2dfe-4bf3-adba-a169637048b7)

# Implementação dos testes componente rotas

## Importações

```
import { mount } from '@vue/test-utils'
import HomeComponente from '../HomeComponente.vue'
import routes from '@/router/'
```

## it

- renderiza o componente Home ao navegar para /

