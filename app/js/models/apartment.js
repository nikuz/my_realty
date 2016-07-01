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
        type: 'section',
        data: [
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
        type: 'section',
        layout: 'line',
        data: [
          {
            name: constants('add_loggia'),
            placeholder: constants('sqm'),
            size: 'small',
            type: 'text',
            values: {
              value: ''
            }
          },
          {
            name: constants('add_balcony'),
            placeholder: constants('sqm'),
            size: 'small',
            type: 'text',
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
            name: constants('add_windows'),
            type: 'segments',
            values: {
              1: {
                name: constants('add_windows_courtyard_street')
              },
              2: {
                name: constants('add_windows_courtyard')
              },
              3: {
                name: constants('add_windows_street')
              }
            }
          }
        ]
      }
    ]
  },
  {
    type: 'common',
    name: 'building'
  },
  {
    type: 'common',
    name: 'furniture'
  },
  {
    type: 'common',
    name: 'transaction'
  },
  {
    type: 'common',
    name: 'transport'
  },
  {
    type: 'common',
    name: 'social'
  },
  {
    type: 'common',
    name: 'additional'
  },
  {
    type: 'common',
    name: 'contacts'
  }
];
