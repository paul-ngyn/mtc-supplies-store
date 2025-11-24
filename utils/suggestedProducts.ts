// Suggested products data for "Similar Products" sections
// This maps each product category to related/similar products

export interface SimilarProduct {
  name: string;
  brand: string;
  brandSlug: string;
  categorySlug: string;
  description: string;
  image: string;
  tags: string[];
}

// All available products organized by category
export const allProducts: Record<string, SimilarProduct[]> = {
  // TKN Products
  'tkn-bagasse-hinged-clamshells': [
    {
      name: 'Bagasse Clamshells',
      brand: 'TKN',
      brandSlug: 'tkn',
      categorySlug: 'bagasse-clamshells',
      description: 'Sustainable bagasse clamshells without hinges',
      image: '/demo.png',
      tags: ['eco-friendly', 'biodegradable', 'clamshell']
    },
    {
      name: 'MB Hinged Clamshells',
      brand: 'MB',
      brandSlug: 'mb',
      categorySlug: 'hinged-clamshells',
      description: 'Durable hinged clamshells for takeout',
      image: '/demo.png',
      tags: ['takeout', 'hinged', 'container']
    },
    {
      name: 'Bio Boxes',
      brand: 'TKN',
      brandSlug: 'tkn',
      categorySlug: 'bio-boxes',
      description: 'Compostable food boxes',
      image: '/demo.png',
      tags: ['compostable', 'eco-friendly', 'box']
    },
    {
      name: 'Boat Trays',
      brand: 'TKN',
      brandSlug: 'tkn',
      categorySlug: 'boat-trays',
      description: 'Paper boat trays for fries and snacks',
      image: '/demo.png',
      tags: ['paper', 'tray', 'serving']
    }
  ],

  'tkn-bagasse-clamshells': [
    {
      name: 'Bagasse Hinged Clamshells',
      brand: 'TKN',
      brandSlug: 'tkn',
      categorySlug: 'bagasse-hinged-clamshells',
      description: 'Eco-friendly hinged clamshells',
      image: '/demo.png',
      tags: ['eco-friendly', 'hinged', 'bagasse']
    },
    {
      name: 'Bio Boxes',
      brand: 'TKN',
      brandSlug: 'tkn',
      categorySlug: 'bio-boxes',
      description: 'Compostable food boxes',
      image: '/demo.png',
      tags: ['compostable', 'eco-friendly', 'box']
    },
    {
      name: 'MB Hinged Clamshells',
      brand: 'MB',
      brandSlug: 'mb',
      categorySlug: 'hinged-clamshells',
      description: 'Durable hinged clamshells',
      image: '/demo.png',
      tags: ['takeout', 'hinged', 'container']
    },
    {
      name: 'Imperial Bento Boxes',
      brand: 'Imperial',
      brandSlug: 'imperial',
      categorySlug: 'bento',
      description: 'Multi-compartment bento boxes',
      image: '/demo.png',
      tags: ['compartment', 'lunch', 'container']
    }
  ],

  'tkn-bio-boxes': [
    {
      name: 'Bagasse Hinged Clamshells',
      brand: 'TKN',
      brandSlug: 'tkn',
      categorySlug: 'bagasse-hinged-clamshells',
      description: 'Eco-friendly hinged clamshells',
      image: '/demo.png',
      tags: ['eco-friendly', 'hinged', 'biodegradable']
    },
    {
      name: 'Paper Bags',
      brand: 'TKN',
      brandSlug: 'tkn',
      categorySlug: 'paper-bags',
      description: 'Recyclable kraft paper bags',
      image: '/demo.png',
      tags: ['paper', 'recyclable', 'eco-friendly']
    },
    {
      name: 'Boat Trays',
      brand: 'TKN',
      brandSlug: 'tkn',
      categorySlug: 'boat-trays',
      description: 'Paper boat trays for snacks',
      image: '/demo.png',
      tags: ['paper', 'tray', 'serving']
    },
    {
      name: 'Food Pails',
      brand: 'TKN',
      brandSlug: 'tkn',
      categorySlug: 'food-pails',
      description: 'Chinese takeout food pails',
      image: '/demo.png',
      tags: ['takeout', 'container', 'chinese']
    }
  ],

  'tkn-boat-trays': [
    {
      name: 'Bio Boxes',
      brand: 'TKN',
      brandSlug: 'tkn',
      categorySlug: 'bio-boxes',
      description: 'Compostable food boxes',
      image: '/demo.png',
      tags: ['compostable', 'eco-friendly', 'box']
    },
    {
      name: 'Paper Bags',
      brand: 'TKN',
      brandSlug: 'tkn',
      categorySlug: 'paper-bags',
      description: 'Recyclable kraft paper bags',
      image: '/demo.png',
      tags: ['paper', 'recyclable', 'kraft']
    },
    {
      name: 'Bagasse Clamshells',
      brand: 'TKN',
      brandSlug: 'tkn',
      categorySlug: 'bagasse-clamshells',
      description: 'Sustainable clamshells',
      image: '/demo.png',
      tags: ['eco-friendly', 'biodegradable', 'clamshell']
    },
    {
      name: 'Food Pails',
      brand: 'TKN',
      brandSlug: 'tkn',
      categorySlug: 'food-pails',
      description: 'Traditional takeout pails',
      image: '/demo.png',
      tags: ['takeout', 'container', 'pail']
    }
  ],

  'tkn-chopsticks': [
    {
      name: 'Imperial Sushi Trays',
      brand: 'Imperial',
      brandSlug: 'imperial',
      categorySlug: 'sushi-tray',
      description: 'Premium sushi trays',
      image: '/demo.png',
      tags: ['sushi', 'japanese', 'premium']
    },
    {
      name: 'Imperial Bento Boxes',
      brand: 'Imperial',
      brandSlug: 'imperial',
      categorySlug: 'bento',
      description: 'Multi-compartment bento boxes',
      image: '/demo.png',
      tags: ['bento', 'lunch', 'japanese']
    },
    {
      name: 'Food Pails',
      brand: 'TKN',
      brandSlug: 'tkn',
      categorySlug: 'food-pails',
      description: 'Chinese takeout pails',
      image: '/demo.png',
      tags: ['chinese', 'takeout', 'asian']
    },
    {
      name: 'Napkins & Paper Towels',
      brand: 'TKN',
      brandSlug: 'tkn',
      categorySlug: 'napkins-papertowels',
      description: 'Paper napkins and towels',
      image: '/demo.png',
      tags: ['napkin', 'paper', 'disposable']
    }
  ],

  'tkn-food-pails': [
    {
      name: 'Chopsticks',
      brand: 'TKN',
      brandSlug: 'tkn',
      categorySlug: 'chopsticks',
      description: 'Disposable chopsticks',
      image: '/demo.png',
      tags: ['chopsticks', 'utensil', 'asian']
    },
    {
      name: 'Imperial Bento Boxes',
      brand: 'Imperial',
      brandSlug: 'imperial',
      categorySlug: 'bento',
      description: 'Multi-compartment containers',
      image: '/demo.png',
      tags: ['bento', 'compartment', 'asian']
    },
    {
      name: 'HD Soup Containers',
      brand: 'HD',
      brandSlug: 'hd',
      categorySlug: 'soup-containers',
      description: 'Leak-proof soup containers',
      image: '/demo.png',
      tags: ['soup', 'container', 'hot food']
    },
    {
      name: 'Paper Bags',
      brand: 'TKN',
      brandSlug: 'tkn',
      categorySlug: 'paper-bags',
      description: 'Kraft paper takeout bags',
      image: '/demo.png',
      tags: ['paper', 'bag', 'takeout']
    }
  ],

  'tkn-napkins-papertowels': [
    {
      name: 'Paper Bags',
      brand: 'TKN',
      brandSlug: 'tkn',
      categorySlug: 'paper-bags',
      description: 'Recyclable paper bags',
      image: '/demo.png',
      tags: ['paper', 'recyclable', 'bag']
    },
    {
      name: 'Boat Trays',
      brand: 'TKN',
      brandSlug: 'tkn',
      categorySlug: 'boat-trays',
      description: 'Paper serving trays',
      image: '/demo.png',
      tags: ['paper', 'tray', 'serving']
    },
    {
      name: 'Chopsticks',
      brand: 'TKN',
      brandSlug: 'tkn',
      categorySlug: 'chopsticks',
      description: 'Disposable utensils',
      image: '/demo.png',
      tags: ['utensil', 'disposable', 'chopsticks']
    },
    {
      name: 'Portion Cups',
      brand: 'TKN',
      brandSlug: 'tkn',
      categorySlug: 'portion-cups',
      description: 'Small portion cups',
      image: '/demo.png',
      tags: ['portion', 'sauce', 'cup']
    }
  ],

  'tkn-paper-bags': [
    {
      name: 'Bio Boxes',
      brand: 'TKN',
      brandSlug: 'tkn',
      categorySlug: 'bio-boxes',
      description: 'Compostable food boxes',
      image: '/demo.png',
      tags: ['compostable', 'eco-friendly', 'box']
    },
    {
      name: 'Boat Trays',
      brand: 'TKN',
      brandSlug: 'tkn',
      categorySlug: 'boat-trays',
      description: 'Paper serving boats',
      image: '/demo.png',
      tags: ['paper', 'tray', 'serving']
    },
    {
      name: 'Napkins & Paper Towels',
      brand: 'TKN',
      brandSlug: 'tkn',
      categorySlug: 'napkins-papertowels',
      description: 'Paper napkins',
      image: '/demo.png',
      tags: ['napkin', 'paper', 'disposable']
    },
    {
      name: 'Bagasse Clamshells',
      brand: 'TKN',
      brandSlug: 'tkn',
      categorySlug: 'bagasse-clamshells',
      description: 'Eco-friendly containers',
      image: '/demo.png',
      tags: ['eco-friendly', 'biodegradable', 'container']
    }
  ],

  'tkn-portion-cups': [
    {
      name: 'Portion Cup Lids',
      brand: 'TKN',
      brandSlug: 'tkn',
      categorySlug: 'portion-cup-lids',
      description: 'Matching lids for portion cups',
      image: '/demo.png',
      tags: ['lid', 'portion cup', 'clear']
    },
    {
      name: 'HD Deli Containers',
      brand: 'HD',
      brandSlug: 'hd',
      categorySlug: 'deli-containers',
      description: 'Round deli containers',
      image: '/demo.png',
      tags: ['deli', 'container', 'storage']
    },
    {
      name: 'HD Soup Containers',
      brand: 'HD',
      brandSlug: 'hd',
      categorySlug: 'soup-containers',
      description: 'Leak-proof soup containers',
      image: '/demo.png',
      tags: ['soup', 'container', 'liquid']
    },
    {
      name: 'TD Plastic Containers',
      brand: 'TD',
      brandSlug: 'td',
      categorySlug: 'plastic-containers',
      description: 'Versatile plastic containers',
      image: '/demo.png',
      tags: ['plastic', 'container', 'storage']
    }
  ],

  'tkn-portion-cup-lids': [
    {
      name: 'Portion Cups',
      brand: 'TKN',
      brandSlug: 'tkn',
      categorySlug: 'portion-cups',
      description: 'Small portion cups for sauces',
      image: '/demo.png',
      tags: ['portion', 'sauce', 'cup']
    },
    {
      name: 'HD Deli Containers',
      brand: 'HD',
      brandSlug: 'hd',
      categorySlug: 'deli-containers',
      description: 'Containers with lids',
      image: '/demo.png',
      tags: ['deli', 'container', 'lid']
    },
    {
      name: 'TD Plastic Containers',
      brand: 'TD',
      brandSlug: 'td',
      categorySlug: 'plastic-containers',
      description: 'Plastic storage containers',
      image: '/demo.png',
      tags: ['plastic', 'container', 'storage']
    },
    {
      name: 'HD Soup Containers',
      brand: 'HD',
      brandSlug: 'hd',
      categorySlug: 'soup-containers',
      description: 'Containers with secure lids',
      image: '/demo.png',
      tags: ['soup', 'container', 'lid']
    }
  ],

  // Imperial Products
  'imperial-sushi-tray': [
    {
      name: 'Imperial Bento Boxes',
      brand: 'Imperial',
      brandSlug: 'imperial',
      categorySlug: 'bento',
      description: 'Multi-compartment boxes',
      image: '/demo.png',
      tags: ['bento', 'japanese', 'compartment']
    },
    {
      name: 'Imperial Poke Bowls',
      brand: 'Imperial',
      brandSlug: 'imperial',
      categorySlug: 'pokebowl',
      description: 'Fresh poke bowls',
      image: '/demo.png',
      tags: ['poke', 'bowl', 'fresh']
    },
    {
      name: 'Chopsticks',
      brand: 'TKN',
      brandSlug: 'tkn',
      categorySlug: 'chopsticks',
      description: 'Disposable chopsticks',
      image: '/demo.png',
      tags: ['chopsticks', 'utensil', 'asian']
    },
    {
      name: 'HD Deli Containers',
      brand: 'HD',
      brandSlug: 'hd',
      categorySlug: 'deli-containers',
      description: 'Round deli containers',
      image: '/demo.png',
      tags: ['deli', 'container', 'storage']
    }
  ],

  'imperial-bento': [
    {
      name: 'Imperial Sushi Trays',
      brand: 'Imperial',
      brandSlug: 'imperial',
      categorySlug: 'sushi-tray',
      description: 'Premium sushi trays',
      image: '/demo.png',
      tags: ['sushi', 'japanese', 'premium']
    },
    {
      name: 'Imperial Poke Bowls',
      brand: 'Imperial',
      brandSlug: 'imperial',
      categorySlug: 'pokebowl',
      description: 'Poke and grain bowls',
      image: '/demo.png',
      tags: ['poke', 'bowl', 'fresh']
    },
    {
      name: 'Bagasse Hinged Clamshells',
      brand: 'TKN',
      brandSlug: 'tkn',
      categorySlug: 'bagasse-hinged-clamshells',
      description: 'Eco-friendly compartment containers',
      image: '/demo.png',
      tags: ['eco-friendly', 'compartment', 'hinged']
    },
    {
      name: 'Chopsticks',
      brand: 'TKN',
      brandSlug: 'tkn',
      categorySlug: 'chopsticks',
      description: 'Disposable chopsticks',
      image: '/demo.png',
      tags: ['chopsticks', 'utensil', 'asian']
    }
  ],

  'imperial-pokebowl': [
    {
      name: 'Imperial Bento Boxes',
      brand: 'Imperial',
      brandSlug: 'imperial',
      categorySlug: 'bento',
      description: 'Compartment lunch boxes',
      image: '/demo.png',
      tags: ['bento', 'compartment', 'lunch']
    },
    {
      name: 'Imperial Sushi Trays',
      brand: 'Imperial',
      brandSlug: 'imperial',
      categorySlug: 'sushi-tray',
      description: 'Sushi presentation trays',
      image: '/demo.png',
      tags: ['sushi', 'japanese', 'tray']
    },
    {
      name: 'HD Deli Containers',
      brand: 'HD',
      brandSlug: 'hd',
      categorySlug: 'deli-containers',
      description: 'Round storage containers',
      image: '/demo.png',
      tags: ['deli', 'container', 'round']
    },
    {
      name: 'Chopsticks',
      brand: 'TKN',
      brandSlug: 'tkn',
      categorySlug: 'chopsticks',
      description: 'Asian utensils',
      image: '/demo.png',
      tags: ['chopsticks', 'utensil', 'asian']
    }
  ],

  // HD Products
  'hd-rerobox': [
    {
      name: 'HD V-Series',
      brand: 'HD',
      brandSlug: 'hd',
      categorySlug: 'v-series',
      description: 'Premium V-Series containers',
      image: '/demo.png',
      tags: ['premium', 'container', 'storage']
    },
    {
      name: 'HD Clipin',
      brand: 'HD',
      brandSlug: 'hd',
      categorySlug: 'clipin',
      description: 'Secure clip-in containers',
      image: '/demo.png',
      tags: ['clipin', 'secure', 'container']
    },
    {
      name: 'HD Deli Containers',
      brand: 'HD',
      brandSlug: 'hd',
      categorySlug: 'deli-containers',
      description: 'Round deli containers',
      image: '/demo.png',
      tags: ['deli', 'container', 'storage']
    },
    {
      name: 'TD Plastic Containers',
      brand: 'TD',
      brandSlug: 'td',
      categorySlug: 'plastic-containers',
      description: 'Durable plastic containers',
      image: '/demo.png',
      tags: ['plastic', 'container', 'durable']
    }
  ],

  'hd-clipin': [
    {
      name: 'HD REROBOX',
      brand: 'HD',
      brandSlug: 'hd',
      categorySlug: 'rerobox',
      description: 'Innovative REROBOX containers',
      image: '/demo.png',
      tags: ['rerobox', 'innovative', 'container']
    },
    {
      name: 'HD V-Series',
      brand: 'HD',
      brandSlug: 'hd',
      categorySlug: 'v-series',
      description: 'Premium containers',
      image: '/demo.png',
      tags: ['premium', 'container', 'v-series']
    },
    {
      name: 'HD Deli Containers',
      brand: 'HD',
      brandSlug: 'hd',
      categorySlug: 'deli-containers',
      description: 'Round storage containers',
      image: '/demo.png',
      tags: ['deli', 'container', 'storage']
    },
    {
      name: 'TD Plastic Containers',
      brand: 'TD',
      brandSlug: 'td',
      categorySlug: 'plastic-containers',
      description: 'Versatile plastic containers',
      image: '/demo.png',
      tags: ['plastic', 'container', 'versatile']
    }
  ],

  'hd-v-series': [
    {
      name: 'HD REROBOX',
      brand: 'HD',
      brandSlug: 'hd',
      categorySlug: 'rerobox',
      description: 'Innovative containers',
      image: '/demo.png',
      tags: ['rerobox', 'innovative', 'storage']
    },
    {
      name: 'HD Clipin',
      brand: 'HD',
      brandSlug: 'hd',
      categorySlug: 'clipin',
      description: 'Secure clip containers',
      image: '/demo.png',
      tags: ['clipin', 'secure', 'container']
    },
    {
      name: 'HD Deli Containers',
      brand: 'HD',
      brandSlug: 'hd',
      categorySlug: 'deli-containers',
      description: 'Deli storage containers',
      image: '/demo.png',
      tags: ['deli', 'container', 'storage']
    },
    {
      name: 'MB Hinged Clamshells',
      brand: 'MB',
      brandSlug: 'mb',
      categorySlug: 'hinged-clamshells',
      description: 'Hinged takeout containers',
      image: '/demo.png',
      tags: ['hinged', 'clamshell', 'takeout']
    }
  ],

  'hd-deli-containers': [
    {
      name: 'Portion Cups',
      brand: 'TKN',
      brandSlug: 'tkn',
      categorySlug: 'portion-cups',
      description: 'Small sauce cups',
      image: '/demo.png',
      tags: ['portion', 'sauce', 'cup']
    },
    {
      name: 'HD Soup Containers',
      brand: 'HD',
      brandSlug: 'hd',
      categorySlug: 'soup-containers',
      description: 'Leak-proof soup containers',
      image: '/demo.png',
      tags: ['soup', 'container', 'liquid']
    },
    {
      name: 'TD Plastic Containers',
      brand: 'TD',
      brandSlug: 'td',
      categorySlug: 'plastic-containers',
      description: 'Plastic storage containers',
      image: '/demo.png',
      tags: ['plastic', 'container', 'storage']
    },
    {
      name: 'Imperial Poke Bowls',
      brand: 'Imperial',
      brandSlug: 'imperial',
      categorySlug: 'pokebowl',
      description: 'Round bowl containers',
      image: '/demo.png',
      tags: ['poke', 'bowl', 'container']
    }
  ],

  'hd-meat-trays': [
    {
      name: 'HD Deli Containers',
      brand: 'HD',
      brandSlug: 'hd',
      categorySlug: 'deli-containers',
      description: 'Round deli containers',
      image: '/demo.png',
      tags: ['deli', 'container', 'storage']
    },
    {
      name: 'TD Plastic Containers',
      brand: 'TD',
      brandSlug: 'td',
      categorySlug: 'plastic-containers',
      description: 'Plastic storage containers',
      image: '/demo.png',
      tags: ['plastic', 'container', 'storage']
    },
    {
      name: 'Portion Cup Lids',
      brand: 'TKN',
      brandSlug: 'tkn',
      categorySlug: 'portion-cup-lids',
      description: 'Clear container lids',
      image: '/demo.png',
      tags: ['lid', 'clear', 'container']
    },
    {
      name: 'Paper Bags',
      brand: 'TKN',
      brandSlug: 'tkn',
      categorySlug: 'paper-bags',
      description: 'Kraft paper packaging',
      image: '/demo.png',
      tags: ['paper', 'bag', 'packaging']
    }
  ],

  'hd-soup-containers': [
    {
      name: 'TD Soup Containers',
      brand: 'TD',
      brandSlug: 'td',
      categorySlug: 'soup-containers',
      description: 'Leak-proof soup containers',
      image: '/demo.png',
      tags: ['soup', 'container', 'leak-proof']
    },
    {
      name: 'HD Deli Containers',
      brand: 'HD',
      brandSlug: 'hd',
      categorySlug: 'deli-containers',
      description: 'Round storage containers',
      image: '/demo.png',
      tags: ['deli', 'container', 'storage']
    },
    {
      name: 'Portion Cups',
      brand: 'TKN',
      brandSlug: 'tkn',
      categorySlug: 'portion-cups',
      description: 'Small portion cups',
      image: '/demo.png',
      tags: ['portion', 'sauce', 'cup']
    },
    {
      name: 'Food Pails',
      brand: 'TKN',
      brandSlug: 'tkn',
      categorySlug: 'food-pails',
      description: 'Takeout food pails',
      image: '/demo.png',
      tags: ['pail', 'takeout', 'container']
    }
  ],

  // TD Products
  'td-plastic-containers': [
    {
      name: 'HD Deli Containers',
      brand: 'HD',
      brandSlug: 'hd',
      categorySlug: 'deli-containers',
      description: 'Round deli containers',
      image: '/demo.png',
      tags: ['deli', 'container', 'storage']
    },
    {
      name: 'TD Soup Containers',
      brand: 'TD',
      brandSlug: 'td',
      categorySlug: 'soup-containers',
      description: 'Soup containers',
      image: '/demo.png',
      tags: ['soup', 'container', 'liquid']
    },
    {
      name: 'HD V-Series',
      brand: 'HD',
      brandSlug: 'hd',
      categorySlug: 'v-series',
      description: 'Premium containers',
      image: '/demo.png',
      tags: ['premium', 'container', 'storage']
    },
    {
      name: 'Portion Cups',
      brand: 'TKN',
      brandSlug: 'tkn',
      categorySlug: 'portion-cups',
      description: 'Small portion cups',
      image: '/demo.png',
      tags: ['portion', 'sauce', 'cup']
    }
  ],

  'td-soup-containers': [
    {
      name: 'HD Soup Containers',
      brand: 'HD',
      brandSlug: 'hd',
      categorySlug: 'soup-containers',
      description: 'Premium soup containers',
      image: '/demo.png',
      tags: ['soup', 'container', 'premium']
    },
    {
      name: 'TD Plastic Containers',
      brand: 'TD',
      brandSlug: 'td',
      categorySlug: 'plastic-containers',
      description: 'Versatile containers',
      image: '/demo.png',
      tags: ['plastic', 'container', 'storage']
    },
    {
      name: 'HD Deli Containers',
      brand: 'HD',
      brandSlug: 'hd',
      categorySlug: 'deli-containers',
      description: 'Round deli containers',
      image: '/demo.png',
      tags: ['deli', 'container', 'storage']
    },
    {
      name: 'Food Pails',
      brand: 'TKN',
      brandSlug: 'tkn',
      categorySlug: 'food-pails',
      description: 'Takeout pails',
      image: '/demo.png',
      tags: ['pail', 'takeout', 'hot food']
    }
  ],

  // MB Products
  'mb-hinged-clamshells': [
    {
      name: 'Bagasse Hinged Clamshells',
      brand: 'TKN',
      brandSlug: 'tkn',
      categorySlug: 'bagasse-hinged-clamshells',
      description: 'Eco-friendly hinged clamshells',
      image: '/demo.png',
      tags: ['eco-friendly', 'hinged', 'biodegradable']
    },
    {
      name: 'Bagasse Clamshells',
      brand: 'TKN',
      brandSlug: 'tkn',
      categorySlug: 'bagasse-clamshells',
      description: 'Sustainable clamshells',
      image: '/demo.png',
      tags: ['eco-friendly', 'biodegradable', 'clamshell']
    },
    {
      name: 'Imperial Bento Boxes',
      brand: 'Imperial',
      brandSlug: 'imperial',
      categorySlug: 'bento',
      description: 'Multi-compartment boxes',
      image: '/demo.png',
      tags: ['compartment', 'lunch', 'container']
    },
    {
      name: 'Bio Boxes',
      brand: 'TKN',
      brandSlug: 'tkn',
      categorySlug: 'bio-boxes',
      description: 'Compostable food boxes',
      image: '/demo.png',
      tags: ['compostable', 'eco-friendly', 'box']
    }
  ]
};

/**
 * Get suggested products for a specific category
 * @param brandSlug - The brand slug (e.g., 'tkn', 'hd')
 * @param categorySlug - The category slug (e.g., 'bagasse-hinged-clamshells')
 * @param maxProducts - Maximum number of products to return (default: 4)
 * @returns Array of similar products
 */
export function getSuggestedProducts(
  brandSlug: string,
  categorySlug: string,
  maxProducts: number = 4
): SimilarProduct[] {
  const key = `${brandSlug}-${categorySlug}`;
  const suggestions = allProducts[key] || [];
  return suggestions.slice(0, maxProducts);
}
