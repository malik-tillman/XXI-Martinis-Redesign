const featuredCollection = {
  "name": "Featured Collection",
  "settings": [
    {
      "type": "text",
      "id": "heading",
      "label": "Heading"
    },
    {
      "type": "textarea",
      "id": "subheading",
      "label": "Subheading"
    },
    {
      "type": "text",
      "id": "button_text",
      "label": "Button Text"
    },
    {
      "type": "url",
      "id": "button_link",
      "label": "Button Link"
    }
  ],
  "blocks": [
    {
      "name": "Flavor",
      "type": "flavor",
      "settings": [
        {
          "type": "image_picker",
          "id": "image",
          "label": "Image"
        },
        {
          "type": "text",
          "id": "flavor",
          "label": "Flavor"
        },
        {
          "type": "text",
          "id": "price",
          "label": "Price"
        },
        {
          "type": "url",
          "id": "link",
          "label": "Link"
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "Featured Collection"
    }
  ]
}

const mainProduct = {
  "name": "Main Product",
  "tag": "section",
  "class": "section",
  "blocks": [
    {
      "type": "flavor",
      "name": "Flavor",
      "settings": [
        {
          "type": "image_picker",
          "id": "image",
          "label": "Image"
        },
        {
          "type": "url",
          "id": "link",
          "label": "Link"
        },
        {
          "type": "color",
          "id": "accent",
          "label": "Accent Color",
          "default": "#ffffff"
        }
      ]
    }
  ],
  "settings": [
    {
      "type": "text",
      "id": "subheading",
      "label": "Subheading",
      "default": "XXI Martinis"
    },
    {
      "type": "textarea",
      "id": "description",
      "label": "Description"
    },
    {
      "type": "text",
      "id": "button_text",
      "label": "Button Text",
      "default": "Where to Buy"
    },
    {
      "type": "url",
      "id": "button_link",
      "label": "CTA Link"
    },
  ]
}
