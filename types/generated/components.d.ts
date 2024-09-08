import type { Schema, Attribute } from '@strapi/strapi';

export interface ItineraryItinerary extends Schema.Component {
  collectionName: 'components_itinerary_itineraries';
  info: {
    displayName: 'itinerary';
  };
  attributes: {
    day: Attribute.String;
    title: Attribute.Text;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'itinerary.itinerary': ItineraryItinerary;
    }
  }
}
