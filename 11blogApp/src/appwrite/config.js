import conf from "../conf/conf";

export class Service {
  client = new Client()
  databases;
  bucket;

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId)
    this.databases = new Databases(this.client)
    this.bucket = new Storage(this.client)
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug)
    } catch (error) {
      console.log("Appwrite Service :: getPost() ::", error)
      false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteCollectionId, queries)
    } catch (error) {
      console.log("Appwrite Service :: getPosts() ::", error)
      false;
    }
  }

  async createPost({ title, slug, content, featuredImage, status, userId}) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title, content, featuredImage, status, userId
        }
      )
    } catch (error) {
      console.log("Appwrite Service :: createPost() ::", error)
      false;
    }
  }

  async updatePost(slug, {title, content, featuredImage, status}) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title, content, featuredImage, status, userId
        }
      )
    } catch (error) {
      console.log("Appwrite Service :: updateDocument() ::", error)
      false;
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
        )
      return true;
    } catch (error) {
      console.log("Appwrite Service :: updateDocument() ::", error)
      false;
    }
  }
}
