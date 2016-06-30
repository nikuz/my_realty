'use strict';

import constants from 'modules/constants';

export default [
  {
    name: constants('add_house_info'),
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
      },
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
      },
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
      },
      {
        name: constants('add_passenger_elevators'),
        type: 'number',
        size: 'small',
        values: {
          value: ''
        }
      },
      {
        name: constants('add_service_lifts'),
        type: 'number',
        size: 'small',
        values: {
          value: ''
        }
      }
    ]
  }
];
