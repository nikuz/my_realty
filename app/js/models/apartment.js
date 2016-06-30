'use strict';

import constants from 'modules/constants';

export default [
  {
    name: constants('add_apartment_info'),
    data: [
      {
        type: 'section',
        data: [
          {
            name: constants('add_rooms'),
            type: 'segments',
            size: 'small',
            values: {
              1: {
                name: 1,
                selected: true
              },
              2: {
                name: 2
              },
              3: {
                name: 3
              },
              4: {
                name: 4
              },
              5: {
                name: 5
              },
              6: {
                name: 6
              },
              7: {
                name: 7
              },
              8: {
                name: 8
              },
              9: {
                name: 9
              },
              10: {
                name: constants('add_rooms_more')
              }
            }
          }
        ]
      },
      {
        type: 'section',
        layout: 'line',
        data: [
          {
            name: constants('add_floor'),
            type: 'number',
            size: 'small',
            values: {
              value: ''
            }
          },
          {
            name: constants('add_floor_total'),
            type: 'number',
            size: 'small',
            values: {
              value: ''
            }
          }
        ]
      },
      {
        type: 'section',
        layout: 'line',
        data: [
          {
            name: constants('add_area'),
            placeholder: constants('sqm'),
            type: 'number',
            size: 'small',
            values: {
              value: ''
            }
          },
          {
            name: constants('add_living_area'),
            placeholder: constants('sqm'),
            type: 'number',
            size: 'small',
            values: {
              value: ''
            }
          },
          {
            name: constants('add_kitchen_area'),
            placeholder: constants('sqm'),
            type: 'number',
            size: 'small',
            values: {
              value: ''
            }
          }
        ]
      },
      {
        name: constants('add_rooms_area'),
        placeholder: constants('sqm'),
        type: 'text',
        values: {
          value: ''
        }
      }
    ]
  },
  {
    name: constants('add_house_info'),
    data: [
      {
        type: 'section',
        layout: 'line',
        data: [
          {
            name: constants('add_construction_year'),
            type: 'year',
            values: {
              value: ''
            }
          },
          {
            name: constants('add_ceiling_height'),
            type: 'number',
            size: 'small',
            values: {
              value: ''
            }
          }
        ]
      },
      {
        type: 'section',
        data: [
          {
            name: constants('add_building_type'),
            type: 'selector',
            values: {
              0: {
                name: '--',
                selected: true
              },
              1: {
                name: constants('add_building_type_brick')
              },
              2: {
                name: constants('add_building_type_monolithic')
              },
              3: {
                name: constants('add_building_type_panel')
              },
              4: {
                name: constants('add_building_type_modular')
              },
              5: {
                name: constants('add_building_type_wood')
              },
              6: {
                name: constants('add_building_type_monolith_brick')
              }
            }
          }
        ]
      },
      {
        type: 'section',
        data: [
          {
            name: constants('add_garbage_chute'),
            type: 'segments',
            values: {
              yes: {
                name: constants('yes')
              },
              no: {
                name: constants('no')
              }
            }
          }
        ]
      },
      {
        type: 'section',
        layout: 'line',
        data: [
          {
            name: constants('add_passenger_elevators'),
            type: 'number',
            placeholder: 'count',
            size: 'small',
            values: {
              value: ''
            }
          },
          {
            name: constants('add_service_lifts'),
            type: 'number',
            placeholder: constants('count'),
            size: 'small',
            values: {
              value: ''
            }
          }
        ]
      }
    ]
  },
  {
    name: constants('add_furniture'),
    data: [
      {
        type: 'section',
        layout: 'line',
        data: [
          {
            name: constants('add_furniture_kitchen'),
            id: 'furniture_kitchen',
            type: 'checkbox',
            icon: 'images/table.svg',
            values: {}
          },
          {
            name: constants('add_furniture_residential'),
            id: 'furniture_residential',
            type: 'checkbox',
            icon: 'images/armchair.svg',
            values: {}
          },
          {
            name: constants('add_fridge'),
            id: 'fridge',
            type: 'checkbox',
            icon: 'images/fridge.svg',
            values: {}
          },
          {
            name: constants('add_tv'),
            id: 'tv',
            type: 'checkbox',
            icon: 'images/television.svg',
            values: {}
          },
          {
            name: constants('add_washer'),
            id: 'washer',
            type: 'checkbox',
            icon: 'images/washing-machine.svg',
            values: {}
          },
          {
            name: constants('add_phone'),
            id: 'phone',
            type: 'checkbox',
            icon: 'images/phone.svg',
            values: {}
          },
          {
            name: constants('add_internet'),
            id: 'internet',
            type: 'checkbox',
            icon: 'images/wifi.svg',
            values: {}
          },
          {
            name: constants('add_dishwasher'),
            id: 'dishwasher',
            type: 'checkbox',
            icon: 'images/dishwasher.svg',
            values: {}
          },
          {
            name: constants('add_conditioner'),
            id: 'conditioner',
            type: 'checkbox',
            icon: 'images/fan.svg',
            values: {}
          }
        ]
      }
    ]
  }
];
