export interface PokemonLocationArea {
  location_area: LocationArea;
  version_details: VersionDetails[];
}  

type LocationArea = {
  name: string; 
  url: string;
}

type VersionDetails = {
  encounter_details: EncounterDetails[];  
  max_chance: number;
  version: {
    name: string;
    url: string;
  }
}

type EncounterDetails = {
  chance: number;
  max_level: number; 
  method: {
    name: string;
    url: string;
  }
}
