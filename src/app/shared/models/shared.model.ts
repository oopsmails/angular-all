export interface GitHubUserSearchResponse {
  total_count: number;
  incomplete_results: boolean;
  items: GitHubUser[];
}

export interface GitHubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  received_events_url: string;
  type: string;
  score: number;
}

// export interface State {
//   id?: number;
//   name: string;
//   flag_img?: string;
//   region?: string;
// }

export interface UsState {
  id?: number;
  stateName: string;
  // name: string;
  flag_img?: string;
  region?: string;
  cities?: UsCity[];
}

export interface UsCity {
  id: number;
  cityName: string;
  inStateName?: string;
}
