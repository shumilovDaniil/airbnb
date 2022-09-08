export default interface IHome {
  id: number;
  distance: number;
  name: string;
  images: string[];
  rating: number;
  date: {
    start: string;
    end: string;
  };
  price: {
    night: number;
    total: number;
    priceItems: [
      {
        title: string;
        amount: number;
      }
    ];
  };
}

export default interface IHomePage {
  id: number;
  distance: number;
  city: string;
  country: string;
  images: string[];
  rating: number;
  address: string;
  reviewsCount: number;
  isSuperhost: boolean;
  hostThumbnail: string;
  date: {
    start: string;
    end: string;
  };
  price: {
    night: number;
    total: number;
    priceItems: [
      {
        title: string;
        amount: number;
      }
    ];
  };
  previewAmenities: ["Wifi", "Heating"];
}