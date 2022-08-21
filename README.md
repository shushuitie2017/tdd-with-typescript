## What is this Repository
- TDD
- Design Pattern
- Architecture Pattern

## Layered Architecture

```
src/LayeredArchitecture/
```

レイヤードアーキテクチャの問題点として本来ビジネスにおいて重要であるApplication層やどDomain層がInfrastracture層に依存していることである.
Infrastacture層は変更が起こる可能性が高く，ビジネスロジックとは分離されるべきない
→本来はアプリケーション層，ドメイン層が主導権を持つべきである
→上位レイヤーは下位レイヤーに依存すること自体は問題ないが層を飛ばして依存することができるためビジネスロジックが分散されスマートUIを作ることが可能になってしまう
