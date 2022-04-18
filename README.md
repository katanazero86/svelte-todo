# svelte-todo

---

> ### svelte todo 소개 <br/>
> Svelte.js, Firebase, Rollup, PostCSS, Tailwind CSS, HTML5, CSS3, Javascript, Typescript
> - Owner & Maintainer
> - github. [https://github.com/katanazero86/svelte-todo](https://github.com/katanazero86/svelte-todo)
> - Todo 를 추가, 수정, 삭제, isDone 처리가 가능하며, Firebase 에서 제공해주는 Cloud Firestore 를 사용하여 데이터를 관리합니다.

---

> ### project 정보 <br/>
> - [sveltejs/template](https://github.com/sveltejs/template) 을 이용하여 rollup 번들러를 사용하는 초기 프로젝트 생성, Svelte 를 이용하여 Todo 웹앱 제작 및 Vercel 배포
> - Tailwind CSS v3 를 사용하여, 스타일링 / Typescript 사용 / Firebase 사용 / 라우팅 처리를 위한 svelte-router-spa 패키지 사용
> - 프로젝트 실행방법(execution)
> ```
> node moudle install : npm i or npm install
> dev : npm run dev
> build : npm run build
> ```

---

> ### project 배포(deploy) <br/>
> - https://vercel.com/ - 버셀 클라우드 플랫폼을 이용하여 배포
> - 버셀 가입 후, github 저장소 연동
> - URL: https://svelte-todo-six.vercel.app/

---

> ### 구조 및 규약

```
/src/main.ts : Svelte 의 시작점(App.svelte 를 가져와서 App 인스턴스 생성 후, DOM 에 마운트 합니다.)
/src/rollup.confug.js : rollup 번들러 설정 및 entry point 를 등록(main.ts)
/src/firebase/firebase.ts : firebase 연동을 위한 설정과 초기화 코드
/src/firebase/repositories/ : 데이터베이스에 접근하는 함수들을 사용하기 위한 코드를 관리하는 폴더 
/src/firebase/types/ : 특정 repository 또는 데이터베이스에 필요한 type 을 관리하는 폴더
/src/components/ : Svelte 컴포넌트를 관리하는 폴더
/src/layout/ : 페이지당 사용할 layout 컴포넌트를 관리하는 폴더
/src/pages/ : Svelte page 컴포넌트를 관리하는 폴더


- 컴포넌트(Example.svelte)명은 대문자로 시작 
- module 패턴으로 작성된 코드는 *Module 로 표기
- on:eventname 인 부분은 이벤트 바인딩이며, bind:property 부분은 속성에 값을 바인딩 합니다.
eventname: handleEvent or handleSubjectEvent

```

---

*Psst — looking for a more complete solution? Check out [SvelteKit](https://kit.svelte.dev), the official framework for building web applications of all sizes, with a beautiful development experience and flexible filesystem-based routing.*

*Looking for a shareable component template instead? You can [use SvelteKit for that as well](https://kit.svelte.dev/docs#packaging) or the older [sveltejs/component-template](https://github.com/sveltejs/component-template)*

---

# svelte app

This is a project template for [Svelte](https://svelte.dev) apps. It lives at https://github.com/sveltejs/template.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit sveltejs/template svelte-app
cd svelte-app
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*


## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:8080](http://localhost:8080). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).


## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for *any* path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```

## Using TypeScript

This template comes with a script to set up a TypeScript development environment, you can run it immediately after cloning the template with:

```bash
node scripts/setupTypeScript.js
```

Or remove the script via:

```bash
rm scripts/setupTypeScript.js
```

If you want to use `baseUrl` or `path` aliases within your `tsconfig`, you need to set up `@rollup/plugin-alias` to tell Rollup to resolve the aliases. For more info, see [this StackOverflow question](https://stackoverflow.com/questions/63427935/setup-tsconfig-path-in-svelte).

## Deploying to the web

### With [Vercel](https://vercel.com)

Install `vercel` if you haven't already:

```bash
npm install -g vercel
```

Then, from within your project folder:

```bash
cd public
vercel deploy --name my-project
```

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public my-project.surge.sh
```
