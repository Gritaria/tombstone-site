# Natives descobertas (RedM/RDR2)

Documento organizado a partir das anotações da comunidade.  
Nomes com `_` ou `N_` ainda são sugestivos (não oficiais).

## 1) Movimento, postura e clipsets (Ped)

- `0x923583741DC87BCE`: set stance/walkstyle base (ex.: `default`, `arthur_healthy`).
- `0x89F5E7ADECCCB49C`: set movement/weapon clipset (ex.: `very_drunk`, `injured_*`, `dehydrated_unarmed`).
- `0xCB9401F918CB0F75`: set walkstyle MP (`MP_Style_Default`, `MP_Style_Gunslinger`, etc).

## 2) Carry, pelt e entidades carregadas

- `0xD806CD2A4F2C2996`: `GET_PED_CARRIED_ENTITY(ped)`.
- `0xC7F0B43DCDC57E3D`: `TASK_PLACE_CARRIED_ENTITY_AT_COORD(...)`.
- `0xED00D72F81CF7278`: derruba pelt/entidade carregada instantaneamente.
- `0xC412AA1C73111FE0`: adiciona pelt a cavalo via `itemHash` + texturas.

## 3) Sangue, feridas e decals

- `0xFA2ECC78A6014D4F`: cria blood decal em posicao.
- `0xF708298675ABDC6A`: cria blood decal point.
- `0xC349EE1E6EFA494B`: cria decals de sangue a partir do ped por alguns segundos.
- `0xFFD54D9FE71B966A`: aplica efeito de ferida/jato de sangue em osso.
- `0x66B1CB778D911F49`: remove efeito de ferida.
- `0x30A768C30D385EC5`: relato de fazer ped sangrar/morrer em ~2s.
- `0x1CE875505D45338A`: relato de matar ped.

## 4) HUD, cores e interface

- `0x8BC7C1F929D07BF3`: mostrar componente do HUD.
- `0x4CC5F2FC1332577F`: esconder componente do HUD.
- `0x50C803A4CD5932C5`: sempre mostrar cores do player.
- `0xD4EE21B7CC7FD350`: sempre mostrar cores do cavalo.
- `0xA4D3A1C008F250DF`: mostra icones nos cores (indices 4..15 observados).
- `0x103C2F885ABEB00B`: verifica se atributo/core esta overpower.
- `0xF6A7C08DF2E28B28`: define overpower amount do core.
- `0xF1622CE88A1946FB`: esconder prompts ativos por frame (uso em loop).
- `0xFA925AC00EB830B9`: formatacao de string monetaria/localizada.
- `0x3FDCC1F8C17E303E`: altera barra de vida ao redor do icone de coracao.

## 5) Camera e cinematica

- `0x90DA5BA5C2635416`: forca 1a pessoa.
- `0x8370D34BD2E60B73`: forca 3a pessoa (distancia intermediaria/far).
- `0x1CFB749AD4317BDE`: forca 3a pessoa mais distante.
- `0x718C6ECF5E8CBDD4`: forca 3a pessoa mais proxima (chamar por frame).
- `0x71D71E08A7ED5BD7`: zoom camera para nivel do chao (frame; `0` reseta).
- `0x066167C63111D8CF`: seta zoom/blend da camera de gameplay (frame).
- `0x69D65E89FFD72313`: barras pretas (efeito cinematico).

## 6) Customizacao de ped (face, corpo, roupa)

- `0xFD1BA1EEF7985BB8`: `GET_PED_FACE_FEATURE(ped, index)`.
- `0x5653AB26C82938CF`: `SET_PED_FACE_FEATURE(ped, index, value)`.
- `0xCC8CA3E88256E58F`: usado para atualizar/resetar customizacao apos alteracoes.
- `0x1902C4CFCC5BE57C`: troca body type/waist type.
- `0x314C5465195F3B30`: `_SET_PED_WEARINESS` (olhos avermelhados).
- `0xFB4891BD7578CDC1`: verifica se componente esta equipado.
- `0x5FF9A878C3D115B8`: categoria de componente por hash.
- `0xA5BAE410B03E7371`: aplica alguns componentes no ped.
- `0xA0BC8FAED8CFEB3C`: `_HAS_PED_COMPONENT_LOADED`.
- `0x31DC8D3F216D8509`: `_HAS_PED_TEXTURE_CREATED`.

## 7) Veiculos, carrocas, cavalos e trens

- `0xD80FAF919A2E56EA`: adiciona cargo no veiculo (component hash).
- `0x5B1A26BB18E7D451`: retorna qtos cavalos uma carroca suporta.
- `0x316CDB5B6E8F4110`: anexa cavalo em veiculo/carroca (com posicao).
- `0xD4F5EFB55769D272`: destaca/remove rodas do veiculo (`0` esquerda, `1` direita).
- `0xC239DBD9A57D2A71`: spawn de trem na trilha mais proxima das coords.
- `0x772A1969F649E902`: `IS_MODEL_A_HORSE(hash)`.
- `0xBAE08F00021BFFB2`: agita cavalo.
- `0x92DB0739813C5186`: `TASK_MOUNT_ANIMAL(...)` com estilos de montagem.
- `0x304AE42E357B8C7E`: `TASK_FOLLOW_TO_OFFSET_OF_ENTITY(...)`.

## 8) Mapa, minimapa, IMAP e mundo

- `0xA657EC9DBC6CC900`: `SET_MINIMAP_ZONE(zoneHash)` (World/Guarma).
- `0x74E2261D2A66849A` e `0x63E7279D04160477`: alternancia visual world/guarma (luz/skybox).
- `0x189739A7631C1867`: `_GET_WORLD_WATER_TYPE()`.
- `0xE8770EE02AEE45C2`: `_SET_WORLD_WATER_TYPE(type)` (`0` world, `1` guarma).
- `0x1392105DA88BBFFB`: coloca objeto no minimapa.
- `0xE057FEA9A22EB3EE`: remove objeto do minimapa.
- `0x9C77964B0E07B633`: pega posicao/heading de IMAP.
- `0xF7424890E4A094C0`: `_GET_ENTITY_FROM_DOORHASH(...)`.
- `0x66B2B83B94B22458`: `_GET_ENTITY_FROM_MAP_OBJECT(...)`.
- `0xD99229FE93B46286`: registra porta (door).

## 9) Animacoes, fala e wheel

- `0x627520389E288A73`: tempo atual da animacao.
- `0xEAA885BA3CEA4E4A`: velocidade da animacao.
- `0x11CDABDC7783B2BC`: define tempo atual da animacao.
- `0x9D6DEC9791A4E501`: se ped pode reproduzir fala especifica.
- `0x4A98E228A936DBCC`: hash da fala atual.
- `0x6BFFB7C276866996`: hash da ultima fala.
- `0x0501D52D24EA8934`: retorna cavalo proximo em algumas condicoes.
- `0x9C409BBC492CB5B1`: item atualmente destacado na weapon wheel.

## 10) Outros

- `0x595478B3BBC3076D`: retorna int do peixe mais proximo.
- `0x6EC2A67962296F49`: `_SET_ENTITY_LIGHTING_COLOUR(entity, r, g, b)`.
- `0x7D6F58F69DA92530`: cria explosao por tipo/escala.
- `0x1913FE4CBF41C463`: `SET_PED_CONFIG_FLAG` (ex. flag `263` = headshot immunity).

## Exemplos Lua (Citizen.InvokeNative)

```lua
-- 1) Walkstyle / clipset
local ped = PlayerPedId()
Citizen.InvokeNative(0x923583741DC87BCE, ped, "default")
Citizen.InvokeNative(0x89F5E7ADECCCB49C, ped, "dehydrated_unarmed")

-- 2) Soltar entidade carregada no chao
local carried = Citizen.InvokeNative(0xD806CD2A4F2C2996, ped)
local x, y, z = table.unpack(GetEntityCoords(ped))
Citizen.InvokeNative(0xC7F0B43DCDC57E3D, ped, carried, x, y, z, 10.0, 0)

-- 3) Overpower Dead Eye
Citizen.InvokeNative(0xF6A7C08DF2E28B28, ped, 2, 5000.0, true)

-- 4) Exibir/esconder HUD
local HUD_MINIMAP = 474191950
Citizen.InvokeNative(0x4CC5F2FC1332577F, HUD_MINIMAP) -- hide
Citizen.InvokeNative(0x8BC7C1F929D07BF3, HUD_MINIMAP) -- show

-- 5) Camera (chamar por frame quando necessario)
Citizen.InvokeNative(0x718C6ECF5E8CBDD4)
Citizen.InvokeNative(0x066167C63111D8CF, 1.0, 1, 0.0, 1, 0.75)

-- 6) Cor de iluminacao da entidade
Citizen.InvokeNative(0x6EC2A67962296F49, ped, 255, 0, 0)
```

## Listas externas citadas

- Minimap objects: https://github.com/femga/rdr3_discoveries/tree/master/graphics/minimap/minimapObjects
- Cargos de veiculo: https://pastebin.com/v7TtqTgE
- Indices de face feature: https://pastebin.com/9jb88FXW

## Notas

- Varios hashes sao resultados de engenharia reversa e podem mudar de comportamento conforme build.
- Alguns relatos indicam que certos natives funcionam apenas em local game e nao em modo online.
- Para natives sensiveis (camera por frame, HUD, feridas), use `CreateThread` e teste em ambiente isolado.
