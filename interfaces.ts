// 小説
interface INovel {
	keyCode: string,
	title: string,
	catchCopy?: string,
	storyList?: IStory[],
}

// ストーリー
interface IStory {
	keyCode: string,
	seq: number,
	title: string,
	descriptionList?: IDescription[], 
	impressionList?: IImpression[],
	relation?: IRelationKeys,
	blockList?: IBlock[],
}

// ブロック
interface IBlock {
	keyCode: string,
	seq: number,
	title: string,
	blockType: number,
	descriptionList?: IDescription[],
	impressionList?: IImpression[],
	relation?: IRelationKeys,
	sceneList?: IScene[],
}

// シーン
interface IScene {
	keyCode: string,
	seq: number,
	title: string,
	sceneType: number,
	descriptionList?: IDescription[],
	impressionList?: IImpression[],
	relation?: IRelationKeys,
	targetDescriptionKeyList?: string[], 
}

// 子要素
// 概要オブジェクト
interface IDescription {
	keyCode: string,
	text: string,
}

// 読み手に与えたい印象オブジェクト
interface IImpression {
	keyCode: string,
	text: string,
	wasSelfChecked: boolean,
	checkedBy?: string,
}

// 関係するオブジェクトのキーリスト
interface IRelationKeys {
	chracterKeyList?: string[],
	itemKeyList?: string[],
	placeKeyList?:string[],
	organizationKeyList?: string[],
}

// オブジェクトのマスターリスト
interface IMasterObj {
	characterList?: ICharacter[],
	itemList?: IItem[],
	placeList?: IPlace[],
	organizationList?: IOrganization[],
}

// キャラクターオブジェクト
interface ICharacter {
	keyCode: string,
	uniqueName: string,
	termSettings?: ITermCharacter[],
}

// 時期別キャラクター設定
interface ITermCharacter {
  keyCode: string,
  termName: string,
  description?: IDescription,
  visual?: IVisual,
  personality?: IPersonality,
  skillList?: ISkill[],
}

// ビジュアル
interface IVisual {
  height?: number,
  weight?: number,
  partsList?: IPart[],
  imageUrl?: string,
}

// 部位
interface IPart {
  partType: number,
  styleText: string,
}

// 性格
interface IPersonality {
  habitEndWord: string
}

// スキル
interface ISkill {
  code: string,
  name: string,
  description: string,
}

