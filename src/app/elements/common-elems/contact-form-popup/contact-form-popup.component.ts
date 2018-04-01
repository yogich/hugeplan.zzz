import {Component, Output, OnInit, EventEmitter, ViewEncapsulation} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, Validators} from '@angular/forms';
declare var google: any;

@Component({
  selector: 'app-contact-form-popup',
  templateUrl: './contact-form-popup.component.html',
  styleUrls: ['./contact-form-popup.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class ContactFormPopupComponent implements OnInit {

  @Output() popupStatus = new EventEmitter();

  public email = new FormControl('', [Validators.required, Validators.email]);
  public valueName;
  public valueEmail;
  public valuePhone;
  public valueText;

  constructor() { }

  ngOnInit() {
    this.initialize();
  }

  closePopup() {
    this.popupStatus.emit(false);
  }

  initialize() {

    const latlng = new google.maps.LatLng(48.397529, 35.041039);

    const settings = {
      zoom: 6,
      center: latlng,
      scrollwheel: false,
      navigationControl: true,
      styles: [
        {
          'featureType': 'all',
          'elementType': 'geometry',
          'stylers': [
            {
              'saturation': '0'
            },
            {
              'lightness': '45'
            },
            {
              'gamma': '0.70'
            },
            {
              'weight': '0.70'
            },
            {
              'hue': '#ff0000'
            }
          ]
        },
        {
          'featureType': 'all',
          'elementType': 'labels.text',
          'stylers': [
            {
              'lightness': '0'
            },
            {
              'gamma': '1.30'
            },
            {
              'saturation': '0'
            }
          ]
        },
        {
          'featureType': 'administrative',
          'elementType': 'all',
          'stylers': [
            {
              'saturation': '-100'
            }
          ]
        },
        {
          'featureType': 'administrative.province',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'landscape',
          'elementType': 'all',
          'stylers': [
            {
              'saturation': '-93'
            },
            {
              'lightness': '10'
            },
            {
              'visibility': 'on'
            },
            {
              'gamma': '0.80'
            }
          ]
        },
        {
          'featureType': 'poi',
          'elementType': 'all',
          'stylers': [
            {
              'saturation': -100
            },
            {
              'lightness': '50'
            },
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'poi.attraction',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'road',
          'elementType': 'all',
          'stylers': [
            {
              'saturation': '-100'
            }
          ]
        },
        {
          'featureType': 'road.highway',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'simplified'
            }
          ]
        },
        {
          'featureType': 'road.highway',
          'elementType': 'geometry',
          'stylers': [
            {
              'saturation': '0'
            },
            {
              'lightness': '100'
            }
          ]
        },
        {
          'featureType': 'road.highway',
          'elementType': 'labels.text',
          'stylers': [
            {
              'visibility': 'simplified'
            }
          ]
        },
        {
          'featureType': 'road.highway',
          'elementType': 'labels.icon',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'road.arterial',
          'elementType': 'all',
          'stylers': [
            {
              'lightness': '30'
            }
          ]
        },
        {
          'featureType': 'road.local',
          'elementType': 'all',
          'stylers': [
            {
              'lightness': '40'
            }
          ]
        },
        {
          'featureType': 'transit',
          'elementType': 'all',
          'stylers': [
            {
              'saturation': '-100'
            },
            {
              'visibility': 'off'
            },
            {
              'lightness': '0'
            },
            {
              'gamma': '1.00'
            }
          ]
        },
        {
          'featureType': 'water',
          'elementType': 'all',
          'stylers': [
            {
              'lightness': '0'
            },
            {
              'gamma': '3.50'
            }
          ]
        },
        {
          'featureType': 'water',
          'elementType': 'geometry',
          'stylers': [
            {
              'hue': '#ffff00'
            },
            {
              'lightness': -25
            },
            {
              'saturation': -97
            }
          ]
        },
        {
          'featureType': 'water',
          'elementType': 'labels',
          'stylers': [
            {
              'lightness': -25
            },
            {
              'saturation': -100
            }
          ]
        }
      ]
    };

    const map = new google.maps.Map(document.getElementById('map'), settings);

    const marker = new google.maps.Marker({
      width: 30,
      position: new google.maps.LatLng(48.403808, 35.038325),
      map: map
    });
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'Введите Ваш E-mail' :
        this.email.hasError('email') ? 'Неверный формат E-mail адреса' :
            '';
  }

}
