'use strict';

import constants from 'modules/constants';

export default [
  {
    name: constants('add_apartment_info'),
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
      },
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
      },
      {
        name: constants('add_area'),
        type: 'number',
        size: 'small',
        values: {
          value: ''
        }
      },
      {
        name: constants('add_living_area'),
        type: 'number',
        size: 'small',
        values: {
          value: ''
        }
      },
      {
        name: constants('add_kitchen_area'),
        type: 'number',
        size: 'small',
        values: {
          value: ''
        }
      },
      {
        name: constants('add_rooms_area'),
        type: 'number',
        size: 'small',
        values: {
          value: ''
        }
      }
    ]
  }
];
