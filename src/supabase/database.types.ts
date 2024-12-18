export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      bookmarks: {
        Row: {
          created_at: string | null
          id: string
          meme_id: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          meme_id: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          meme_id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bookmarks_meme_id_fkey"
            columns: ["meme_id"]
            isOneToOne: false
            referencedRelation: "memes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookmarks_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      character_meme: {
        Row: {
          character_id: string
          meme_id: string
        }
        Insert: {
          character_id: string
          meme_id: string
        }
        Update: {
          character_id?: string
          meme_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "character_meme_character_id_fkey"
            columns: ["character_id"]
            isOneToOne: false
            referencedRelation: "characters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "character_meme_meme_id_fkey"
            columns: ["meme_id"]
            isOneToOne: false
            referencedRelation: "memes"
            referencedColumns: ["id"]
          },
        ]
      }
      characters: {
        Row: {
          aliases: string[] | null
          category: string[] | null
          created_at: string | null
          id: string
          metadata: Json | null
          name: string
          profile_url: string | null
        }
        Insert: {
          aliases?: string[] | null
          category?: string[] | null
          created_at?: string | null
          id: string
          metadata?: Json | null
          name: string
          profile_url?: string | null
        }
        Update: {
          aliases?: string[] | null
          category?: string[] | null
          created_at?: string | null
          id?: string
          metadata?: Json | null
          name?: string
          profile_url?: string | null
        }
        Relationships: []
      }
      comments: {
        Row: {
          comment_text: string
          created_at: string | null
          id: string
          meme_id: string
          user_id: string | null
        }
        Insert: {
          comment_text: string
          created_at?: string | null
          id?: string
          meme_id: string
          user_id?: string | null
        }
        Update: {
          comment_text?: string
          created_at?: string | null
          id?: string
          meme_id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "comments_meme_id_fkey"
            columns: ["meme_id"]
            isOneToOne: false
            referencedRelation: "memes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      downloads: {
        Row: {
          download_count: number | null
          downloaded_at: string | null
          id: string
          meme_id: string
          user_id: string | null
        }
        Insert: {
          download_count?: number | null
          downloaded_at?: string | null
          id?: string
          meme_id: string
          user_id?: string | null
        }
        Update: {
          download_count?: number | null
          downloaded_at?: string | null
          id?: string
          meme_id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "downloads_meme_id_fkey"
            columns: ["meme_id"]
            isOneToOne: false
            referencedRelation: "memes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "downloads_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      likes: {
        Row: {
          created_at: string | null
          id: string
          meme_id: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          meme_id: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          meme_id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "likes_meme_id_fkey"
            columns: ["meme_id"]
            isOneToOne: false
            referencedRelation: "memes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "likes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      meme_tags: {
        Row: {
          meme_id: string
          tag_id: string
        }
        Insert: {
          meme_id: string
          tag_id: string
        }
        Update: {
          meme_id?: string
          tag_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "meme_tags_meme_id_fkey"
            columns: ["meme_id"]
            isOneToOne: false
            referencedRelation: "memes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "meme_tags_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
        ]
      }
      memes: {
        Row: {
          created_at: string | null
          created_by: string
          description: string
          id: string
          languages: string[] | null
          media_path: string
          media_type: string
          media_url: string
          published_at: string | null
          status: Database["public"]["Enums"]["Meme Publish Status"]
          title: string
        }
        Insert: {
          created_at?: string | null
          created_by: string
          description: string
          id?: string
          languages?: string[] | null
          media_path: string
          media_type: string
          media_url: string
          published_at?: string | null
          status?: Database["public"]["Enums"]["Meme Publish Status"]
          title: string
        }
        Update: {
          created_at?: string | null
          created_by?: string
          description?: string
          id?: string
          languages?: string[] | null
          media_path?: string
          media_type?: string
          media_url?: string
          published_at?: string | null
          status?: Database["public"]["Enums"]["Meme Publish Status"]
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "memes_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      reviews: {
        Row: {
          comments: string | null
          created_at: string | null
          created_by: string
          id: string
          meme_id: string
          reviewer_id: string | null
          status: Database["public"]["Enums"]["review status"] | null
          updated_at: string | null
        }
        Insert: {
          comments?: string | null
          created_at?: string | null
          created_by: string
          id?: string
          meme_id: string
          reviewer_id?: string | null
          status?: Database["public"]["Enums"]["review status"] | null
          updated_at?: string | null
        }
        Update: {
          comments?: string | null
          created_at?: string | null
          created_by?: string
          id?: string
          meme_id?: string
          reviewer_id?: string | null
          status?: Database["public"]["Enums"]["review status"] | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "reviews_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reviews_meme_id_fkey"
            columns: ["meme_id"]
            isOneToOne: false
            referencedRelation: "memes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reviews_reviewer_id_fkey"
            columns: ["reviewer_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      shares: {
        Row: {
          id: number
          meme_id: number | null
          platform: string | null
          shared_at: string | null
          user_id: string | null
        }
        Insert: {
          id?: number
          meme_id?: number | null
          platform?: string | null
          shared_at?: string | null
          user_id?: string | null
        }
        Update: {
          id?: number
          meme_id?: number | null
          platform?: string | null
          shared_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "shares_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      tags: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id?: string
          name: string
        }
        Update: {
          id?: string
          name?: string
        }
        Relationships: []
      }
      user_preferences: {
        Row: {
          created_at: string | null
          id: number
          language: string | null
          last_search_term: string | null
          theme: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          language?: string | null
          last_search_term?: string | null
          theme?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          language?: string | null
          last_search_term?: string | null
          theme?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_preferences_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          email: string | null
          full_name: string | null
          id: string
          role: Database["public"]["Enums"]["role"] | null
          updated_at: string | null
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id: string
          role?: Database["public"]["Enums"]["role"] | null
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          role?: Database["public"]["Enums"]["role"] | null
          updated_at?: string | null
          username?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      insert_or_update_meme_v4: {
        Args: {
          p_created_by: string
          p_title: string
          p_description: string
          p_meme_id?: string
          p_media_url?: string
          p_media_path?: string
          p_media_type?: string
          p_languages?: string[]
          p_tags?: string[]
          p_characters?: Json[]
        }
        Returns: {
          returned_meme_id: string
          returned_title: string
          returned_description: string
          returned_media_url: string
          returned_media_path: string
          returned_media_type: string
          returned_status: string
          returned_created_by: string
          returned_languages: string[]
          returned_tags: string[]
          returned_characters: Json[]
        }[]
      }
    }
    Enums: {
      "Meme Publish Status": "draft" | "review" | "rejected" | "published"
      "review status": "pending" | "published" | "rejected"
      role: "administrator" | "moderator" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
