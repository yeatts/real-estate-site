// type imports
import { TIcon }  from "app/models/types/react-icon"

// use file to link content to components.
export type TServiceCard = {
  icon: TIcon,
  header: string,
  description: string,
}

export default class ServiceCard {
  public serviceCard: TServiceCard;

  constructor(serviceCard: TServiceCard) {
    this.serviceCard = serviceCard;
  }

  // I need getter and setters for each property in the type TServiceCard
  public get icon(): TIcon {
    return this.serviceCard.icon;
  }

  public set icon(icon: TIcon) {
    this.serviceCard.icon = icon;
  }

  public get header(): string {
    return this.serviceCard.header;
  }

  public set header(header: string) {
    this.serviceCard.header = header;
  }

  public get description(): string {
    return this.serviceCard.description;
  }

  public set description(description: string) {
    this.serviceCard.description = description;
  }

  public static builder(): ServiceCardBuilder {
    return new ServiceCardBuilder();
  }
}

export class ServiceCardBuilder {
  public serviceCard: TServiceCard;

  constructor() {
    this.serviceCard = {
        icon: '' as TIcon,
        header: '',
        description: '',
    }
  }

  public withIcon(icon: TIcon): ServiceCardBuilder {
    this.serviceCard.icon = icon;
    return this;
  }

  public withHeader(header: string): ServiceCardBuilder {
    this.serviceCard.header = header;
    return this;
  }

  public withDescription(description: string): ServiceCardBuilder {
    this.serviceCard.description = description;
    return this;
  }

  public withDefaultServiceCard(): ServiceCardBuilder {
    this.serviceCard.icon = 'fa-rocket';
    this.serviceCard.header = 'Service Card';
    this.serviceCard.description = 'This is a service card';
    return this;
  };
          
  public build(): ServiceCard {
    return new ServiceCard(this.serviceCard);
  }
}