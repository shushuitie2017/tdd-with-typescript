## Primary と Secondary

Primary:
Applicationを呼び出すもModule Adaptor

ApplicationのMethod Port


Secondary:
Applicationから呼び出すInterface Port

Interfaceの実装Module Adaptor


## ヘキサゴナルアーキテクチャ
大枠の概念はこれ．
<img width="457" alt="Screenshot 0004-08-20 at 0 02 03" src="https://user-images.githubusercontent.com/83538851/185648582-32e13d35-2fd3-48ab-896a-63bc9c3de9af.png">

ドメインオブジェクトに関する表現はDomain層に
アプリケーションサービスとドメインサービスはApplication層に
FrameWork層はものによってはAdapter層とも呼ばれていてInputから
##### もう少し層を分けて考える

