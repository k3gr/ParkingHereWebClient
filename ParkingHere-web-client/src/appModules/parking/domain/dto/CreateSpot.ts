import { SpotTypeEnum } from '@/appModules/reservation/domain/enumerated/SpotTypeEnum'

export interface ICreateSpot {
  price: number
  type: SpotTypeEnum
}

export default class CreateSpotDto implements ICreateSpot {
  constructor(public price: number = 0, public type: SpotTypeEnum = SpotTypeEnum.Standard) {}
}
