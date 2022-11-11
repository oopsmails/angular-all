import { AuthStateInterface } from "src/app/example/auth/types/authState.interface";
import { PostsStateInterface } from "src/app/store-poc/posts/types/postsState.interface";

export interface AppStateInterface {
  // orig
  posts: PostsStateInterface;

  // Feeds
  auth: AuthStateInterface
  // feed: FeedStateInterface
  // popularTags: PopularTagsStateInterface
  // article: ArticleStateInterface
  // createArticle: CreateArticleStateInterface
  // editArticle: EditArticleStateInterface
  // settings: SettingsStateInterface
  // userProfile: UserProfileStateInterface
}
