<H1 align="center">Jest Unit Test </H1>
<p align="center">🚀 Unit testing using jest for future references</p>

## Creating the Project

```
vue create vue-tests
```

Vue 3 option with Babel and Eslint

## Configuring Test Tools

### Installing packages
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

### Configuring package.json

```
"scripts": {
...
 "test:watch": "jest --verbose --watch"
}

```

### Creation of the __test__ directory

To carry out component tests, we will create a __tests__ directory.

<div align="center">
 <img src="https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/ad638b2d-59b7-4f12-a3f2-0cfb0bd89dda" style="width:100%">
</div>



# Implementation of service projectServices tests

## Imports

```
import { getProject, createProject, updateProject, deleteProject } from '../projectServices';
```

## it

- must return the project with the given id
- should fail when trying to get a project with an invalid id
- must create a new project
- must update the project with the provided id
- should fail when trying to update a project with an invalid id
- must delete the project with the provided id
- should fail when trying to delete a project with an invalid id

### Transforming imported functions into mock functions

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/06850427-1b1f-41b2-94af-81dcd1bfa86a)

### test: must return the project with the given id

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/b1656d3f-6c10-42a9-9529-6ecc97b48a84)

### test: should fail when trying to get a project with an invalid id

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/ac4865ff-27ea-4501-aefd-14faf797ba1d)

### test: must create a new project

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/7e695a18-6b84-4383-9fac-5529a6435645)

### test: should fail when trying to create a project with a duplicate name

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/b9132386-afa7-4959-a8d1-b3fbb9b3a067)

### test: should update the project with the given id

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/b9b6bb58-232c-42ad-a904-cfe9bf4b0eb5)


### test: should fail when trying to update a project with an invalid id

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/06d6ebe1-15e4-4269-b9bb-13ca737aac9e)


### test: must delete the project with the given id

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/7241b29d-a97b-4cd2-9a5b-179babb4d5ed)


### test: should fail when trying to delete a project with an invalid id

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/485c2eed-56dc-4616-b8ea-68395dcce13f)


# Implementation of SearchInput component tests

## Imports
```
import { mount } from '@vue/test-utils'; // Importing the mount function from the Vue test utils library
import SearchInput from '../SearchInput.vue'; // Importing the SearchInput component to be tested
```

## it

- must be a Vue instance
- must update searchQuery when prop value changes
- must emit the input event when something is typed
- should clear the input value when the X icon is clicked


Test cases to check.


### test: must be a Vue instance

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/4bb965d6-2c05-4b3e-ad97-77b2fda61eb9)


### test: should update searchQuery when prop value changes

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/e7cd8cd8-a04d-4b83-9ddf-846eeba030a2)

### test: should emit the input event when something is typed

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/7c18ba12-3d4f-4eee-a82d-7d19a425355b)

### test: should clear the input value when the X icon is clicked

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/70cc4260-6783-4acb-b78d-41d2ade4d227)


# Implementation of api-client tests

## Imports

```
import { mount } from '@vue/test-utils';
import ApiComponent from '../ApiComponent.vue';
```

## it

- renders a list of users
- searches the list of users when creating the component

### Mocking the External API call


This mock function replaces the Axios 'get' function, this ensures that when trying to make a GET request, it will return the data below.

```
jest.mock('axios', () => ({
 get: jest.fn(() => Promise.resolve({ data: [{ id: 1, name: 'User 1' }, { id: 2, name: 'User 2' }] }))
 }));
```

### beforeEach

At the beginning of each test call, the component is assembled in memory

```
wrapper = mount(ApiComponent);
```

### afterEach

At the end of each test, all jest mocks are cleaned.

```
jest.clearAllMocks();
```

### test: renders a list of users

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/a2998d41-2aae-4502-94bf-823daf413f50)

### test: searches the list of users when creating the component

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/23bcfb7a-ead6-44b9-81cc-c75a69e80f40)

# Implementation of computed-event component tests

## Imports

```
import { mount } from '@vue/test-utils';
import ComputedComponent from '../ComputedComponent.vue';
```

## it

- calculates full name correctly
- reacts to changes in firstName and lastName
- validates the size of firstName and lastName
- calculates full name length correctly
- treats firstName and lastName as null or empty


### test: calculates the full name correctly

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/ec9ebdc3-fd89-41e5-8300-35f05e9bcd55)

### test: reacts to changes in firstName and lastName

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/8ab287fe-ddc4-4fcd-ac65-d8819bb87ac7)

### test: validates the size of firstName and lastName

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/ddb0c6b0-f2bc-49de-ae43-8a6fdeeceebc)

### test: calculates full name length correctly

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/62349b9a-c9d0-4ada-87fc-a9605f1eb337)

### test: treats firstName and lastName as null or empty

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/5a93ccd9-68ea-4993-92ed-0aa6dd56ed6a)

# Implementation of form component tests

## Imports

```
import { mount } from '@vue/test-utils';
import FormComponent from '../FormComponent.vue';
```

## it

- should correctly update the template when fields are filled in
- should display an error message when submitting a form with blank fields
- should display error message for blank name field
- should display error message for blank email field
- should display error message for invalid email format
- must clear the fields after successful submission of the form

### test: should correctly update the model when fields are populated

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/ed996d7f-5efb-44bf-912e-004dd43e3c92)


### test: should display an error message when submitting a form with blank fields

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/6beda36c-4a30-4211-a9f9-4561ef463e36)

### test: should display error message for blank name field

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/1ac52b12-a44e-44cb-bc4c-2dd8c22c8042)

### test: should display error message for blank email field

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/51c77b4c-e1a7-4fff-a17f-545a1f4b7df8)

### test: should display error message for invalid email format

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/6cdcd798-d640-4ab3-90fb-bd13931ba4c8)

### test: should clear fields after successful form submission

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/6d888083-c658-4459-ab09-a2dc1bbc44d7)

# Implementation of interaction-component-parent-child component tests

## Imports

```
import { mount } from '@vue/test-utils';
import InteracaoComponente from '../InteracaoComponente.vue'
import ChildComponente from '../ChildComponente.vue';
```

## it

- renders the child component with the correct props
- passes properties to the ChildComponente and handles events from it

### test: renders the child component with the correct props

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/5140c3e6-134a-4e68-8af1-5223c6f51a44)

### test: passes properties to the ChildComponente and handles events from it

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/32c76277-c9fa-4da6-9c07-8c13aee4bd6d)

# Implementation of login component tests

## Imports

```
import { mount } from '@vue/test-utils';
import LoginComponent from '../LoginComponent.vue';
```

## it

- defines email and password data when the input is changed
- calls login method when form is submitted
- displays error message if email or password is missing
- displays error message for invalid credentials
- successfully log in with valid credentials

### test: defines email and password data when the input is changed

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/3b057729-7f94-4110-b858-4838e80fe4f0)

### test: calls login method when form is submitted

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/f644983a-d589-4027-93bc-5e0c13466923)

### test: displays error message if email or password is missing

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/edd93bc6-1989-49b2-9bf4-b0d094da903f)

### test: displays error message for invalid credentials

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/f0b5852e-84e0-4c4e-aa15-d929369769f8)

### test: successfully logs in with valid credentials

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/4a3f4dca-223a-4ed5-a5f0-2d78e6edf4a8)


# Implementation of manipulation-state-vuex component tests

## Imports

```
import { mount } from '@vue/test-utils';
import { createStore } from 'vuex'
import EstadoComponente from '../EstadoComponente.vue';
```

## it

- checks if the counter is at 0
- checks if the increment button is present
- checks if the decrement button is present
- checks if clicking the increment button increments the counter
- checks if clicking the decrement button decrements the counter
- checks if the component displays the loading message when it is loading
- checks whether the component displays an error message when an error occurs

### beforeEach()

Before each unit test, a fake store is created

```
 fakestore = createStore({
```
And the incrementAsync and decrementAsync actions are replaced by the creation of 2 mock functions with a similar implementation to the original

```
incrementAsync: jest.fn().mockImplementation(({ commit }) => { ...

```

```
decrementAsync: jest.fn().mockImplementation(({ commit }) => { ...

```

And finally, a wrapper is created using the fake store as a plugin

```
 wrapper = mount(ComponentState, {
 global: {
 plugins: [fakestore],
 },
 });

```

### test: checks if the counter is at 0

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/1cc1ef5c-1c95-4758-b094-152a07b7bbf3)

### test: checks if the increment button is present

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/bfe4d070-f1e8-4af9-869b-bb63fb019242)

### test: checks if the decrement button is present

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/50468f46-96fd-4bf5-a12b-3db46b825ee2)

### test: checks whether clicking the increment button increments the counter

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/23b11f1e-5846-4127-b0cd-dfe554453f8a)

### test: checks whether clicking the decrement button decrements the counter

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/1abbf73a-abb5-4d66-b523-1a4c33f5986f)

### test: checks if the component displays the loading message when it is loading

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/f5c3d589-3004-43d8-80d3-47c03edb6218)

### test: checks whether the component displays an error message when an error occurs

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/4549aace-56a3-44a2-805b-0c937be6b800)

# Implementation of event-handling component tests

## Imports

```
import { mount , shallowMount } from '@vue/test-utils'
import ButtonCounter from '../ManipulacaoEvento.vue'
```

## it

- increments the counter when clicking the button
- resets the counter by clicking the "Reset" button
- changes text when button is clicked


### test: increments the counter when clicking the button

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/7e40433c-d584-4af1-908d-da1f1b489b20)

### test: resets the counter by clicking the "Reset" button

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/ddf8dcc9-96c2-405f-b372-e51d0edd09c3)


### test: changes the text when the button is clicked

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/42a3b4bd-aa58-494d-8d33-c796b610c9fd)

# Implementation of mounted-event component tests

## Imports

```
import { mount } from '@vue/test-utils';
import CalculateComponent from '../CalculateComponent.vue';
```

## it

- calculates and displays the sum correctly when assembled

### test: calculates and displays the sum correctly when assembled

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/a6cfb4c1-63e2-4414-a8c2-fd74c4d95721)

# Implementation of render-component component tests

## Imports

```
import { mount } from '@vue/test-utils'
import HelloWorld from '../RenderizaComponente.vue'
```

## it

- renders correctly with the passed message and description
- renders correctly without message and with default style

### test: renders correctly with the passed message and description

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/86fe3ba7-8962-44d9-afff-20f72edb6c60)

### test: renders correctly without message and with default style

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/b84f0599-6abd-4f6e-a6c4-6049c84ac5d2)


# Implementation of render-conditional component tests

## Imports

```
import { mount } from '@vue/test-utils';
import CondicionalComponente from '../CondicionalComponente.vue';

```

## it

- renders the message when showMessage is true
- does not render the message when showMessage is false


Const wrapper was assembled outside the scope of each test so that each test uses the same component in virtual memory, simulating a toggle

```
const wrapper = mount(ConditionalComponent);
```

### test: render the message when showMessage is true

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/169c1b57-cecc-4aeb-bad5-cbdfcb4446b2)

### test: does not render message when showMessage is false

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/d564bd0d-2dfe-4bf3-adba-a169637048b7)

# Implementation of route component tests

## Imports

```
import { mount } from '@vue/test-utils'
import HomeComponente from '../HomeComponente.vue'
import routes from '@/router/'
```

## it

- renders the Home component when navigating to "/"


### beforeEach()

Creation of a wrapper passing the imported routes file as a plugin so that the component is mounted in memory before each test.

```
 wrapper = mount(ComponentState, {
 global: {
 plugins: [fakestore],
 },
 });

```


### test: render Home component when navigating to "/"

![image](https://github.com/lucasmargui/Vue_Test_Jest-Unit/assets/157809964/720e2ae8-d14f-419b-8ded-7d5a24c21ad1)





