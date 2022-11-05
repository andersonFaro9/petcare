### Vamos aprender juntos um aplicação chamada de PetCare, um web App  que se preocupa com o bem estar dos animais. como posicionar elementos em uma aplicação responsiva aprendendo e explorando o conceito de mobilefirst com FlexBox CSS, Grid CSS, Next Js e Tailwindcss.Estou partindo do princípio que você está familarizando com o Next Js, Tailwindcss e Css. Espero que gostem!

- Em primeiro lugar, vamos criar  acrescentar ao componente Header nosso hook em em seguida uma constante com nome de menuItemClassName que recebe um objeto da biblioteca clsx que ajuda para manipulação da lógica do visible e hidden.

#### Trecho do código:

 - Vamos criar um hook com seu estado inicial false:


```ts

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
```
   
  ##### Em seguida utilizaremos  a lib clsx que facilita o uso de condições numa classe:


```ts
const menuItemClassName = clsx (
   'md:block md:text-lg text-4lg hover:underline visited:font-bold',
   {visible: mobileMenuOpen, hidden:!mobileMenuOpen}
)

```
##### No trecho acima nós criamos os breakpoints css no estilo do tailwindcss. O md:block significa que o menu aparecerá em modo de bloco, o md:text-lg possui largura de 18px  e representado pelo tailwindcss com font-size: 1.125rem e por fim o md representa o minímo de 768 de largura: ```@media (min-width: 768px) { ... } ```

##### Para mais detalhes verificar aqui no site tailwindcss: https://tailwindcss.com/docs/responsive-design#using-custom-breakpoints

##### Todo o contéudo pode ser verificado no componente Header dessa aplicação ou através desse link criado, todo o código foi pela rocketseat e o creator João Balbino:nesse link:  https://github.com/rocketseat-creators-program/responsividade-tailwindcss-reactjs-menu-hamburger
    h