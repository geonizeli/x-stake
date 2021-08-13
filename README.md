# X Stake

## 💻 Pré-requisitos

* Ruby 2.7.4
* Node.js >= 14.x
* Postgres 13.x
* [Watchman](https://github.com/facebook/watchman) (opcional)


## 🚀 Instalando

Comandos para a instalação:

```
bundle install
```
```
yarn install
```
```
rails db:create db:migrate db:seed
```

## ☕ Desenvolvimento

Inicie o Rails com:

```
rails server
```

Para ter auto-reload enquanto desenvolve nas telas React inicie o webpack-dev-server com:
```
yarn dev
```

Para gerar os types do Relay use um dos comandos:
```
yarn relay
```
```
yarn relay:watch // requer a instalação do watchman
```
