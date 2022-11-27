Vamos aprender juntos um aplicação chamada PetCare, um web App  que se preocupa com o bem estar dos animais, em como posicionar elementos em uma aplicação responsiva aprendendo e explorando o conceito de mobilefirst com FlexBox CSS, Grid CSS, Next Js e Tailwindcss. Nesse primeiro momento, vamos desenvolver nosso menu hamburguer. Todo o contéudo do menu hamburguer foi desenvolvido pela rocketseat e o creator João Balbino e pode ser visto através desse link:  https://github.com/rocketseat-creators-program/responsividade-tailwindcss-reactjs-menu-hamburger .

Estou partindo do princípio que você está familarizando com o Next Js, Tailwindcss e Css. Espero que gostem!


 #### Basicamente, trabalhar com mobile First é pensar primeiro em como sua aplicação ficará nos dispositivos movéis, em seguida no web sites e desktop. E para que isso seja possível trabalharemos com breakpoints no CSS, flex box e grid.

#### Responsividade no Tailwindcss e breakpoints css, por padrão são 05 breakpoints baseado nas resoluções mais usadas por aí:
  
  sm:	Minímo de 640px:	@media (min-width: 640px) { ... }
  md: Minímo de 768px: @media (min-width: 768px) { ... }
  lg: Minímo de 1024px: @media (min-width: 1024px) { ... }
  xl: Minímo de 1280: @media (min-width: 1280) { ... }
  2xl: Minímo de 1536: @media (min-width: 1536) { ... }


   ####  Nesse exemplo nós temos uma largura padrão de 16px, um md de 32 e lg de 48, ou seja: a medida que tela do device se alarga o tamanho da imagem aumenta:
   
   ```<img class="w-16 md:w-32 lg:w-48" src="..."/>```

  #### Esse exemplo mostra um texto centralizado até que chega que fica na medida de 640px e o texto vai para a direção da esquerda:```<div class="text-center sm:text-left"></div> ```
##### Trecho do código:

 - Vamos criar um hook com seu estado inicial false:


```ts

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
```
   
  ##### Em seguida utilizaremos  a lib clsx que facilita o uso de condições numa classe, entre outras vantagens que temos ao usá-lo e pode ser visto aqui: https://www.npmjs.com/package/clsx


```ts
const menuItemClassName = clsx (
   'md:block md:text-lg text-4lg hover:underline visited:font-bold',
   {visible: mobileMenuOpen, hidden:!mobileMenuOpen}
)

```
- No trecho acima criamos os breakpoints css no estilo do tailwindcss. O md:block significa que o menu aparecerá em modo de bloco, o md:text-lg possui largura de 18px  e representado pelo tailwindcss com font-size: 1.125rem e por fim o md representa o minímo de 768 de largura: ```@media (min-width: 768px) { ... } ```

- Para mais detalhes sobre breakpoints verificar no site tailwindcss: https://tailwindcss.com/docs/responsive-design#using-custom-breakpoints

 