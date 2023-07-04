export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      Project: {
        Row: {
          created_at: string | null;
          created_by: string | null;
          deadline: string | null;
          id: string;
          isSubproject: boolean | null;
          last_modified_at: string | null;
          name: string;
          parent: string | null;
        };
        Insert: {
          created_at?: string | null;
          created_by?: string | null;
          deadline?: string | null;
          id?: string;
          isSubproject?: boolean | null;
          last_modified_at?: string | null;
          name: string;
          parent?: string | null;
        };
        Update: {
          created_at?: string | null;
          created_by?: string | null;
          deadline?: string | null;
          id?: string;
          isSubproject?: boolean | null;
          last_modified_at?: string | null;
          name?: string;
          parent?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "Project_created_by_fkey";
            columns: ["created_by"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "Project_parent_fkey";
            columns: ["parent"];
            referencedRelation: "Project";
            referencedColumns: ["id"];
          }
        ];
      };
      project_tags: {
        Row: {
          created_at: string | null;
          id: number;
          project_id: string | null;
          tag_id: number | null;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
          project_id?: string | null;
          tag_id?: number | null;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          project_id?: string | null;
          tag_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "project_tags_project_id_fkey";
            columns: ["project_id"];
            referencedRelation: "Project";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "project_tags_tag_id_fkey";
            columns: ["tag_id"];
            referencedRelation: "Tag";
            referencedColumns: ["id"];
          }
        ];
      };
      project_users: {
        Row: {
          created_at: string | null;
          id: number;
          project_id: string;
          user_id: string;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
          project_id: string;
          user_id: string;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          project_id?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "project_users_project_id_fkey";
            columns: ["project_id"];
            referencedRelation: "Project";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "project_users_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      Tag: {
        Row: {
          created_at: string | null;
          id: number;
          name: string;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
          name: string;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

export interface DatabaseAuth {
  auth: {
    Tables: {
      audit_log_entries: {
        Row: {
          created_at: string | null;
          id: string;
          instance_id: string | null;
          ip_address: string;
          payload: Json | null;
        };
        Insert: {
          created_at?: string | null;
          id: string;
          instance_id?: string | null;
          ip_address?: string;
          payload?: Json | null;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          instance_id?: string | null;
          ip_address?: string;
          payload?: Json | null;
        };
        Relationships: [];
      };
      flow_state: {
        Row: {
          auth_code: string;
          authentication_method: string;
          code_challenge: string;
          code_challenge_method: DatabaseAuth["auth"]["Enums"]["code_challenge_method"];
          created_at: string | null;
          id: string;
          provider_access_token: string | null;
          provider_refresh_token: string | null;
          provider_type: string;
          updated_at: string | null;
          user_id: string | null;
        };
        Insert: {
          auth_code: string;
          authentication_method: string;
          code_challenge: string;
          code_challenge_method: DatabaseAuth["auth"]["Enums"]["code_challenge_method"];
          created_at?: string | null;
          id: string;
          provider_access_token?: string | null;
          provider_refresh_token?: string | null;
          provider_type: string;
          updated_at?: string | null;
          user_id?: string | null;
        };
        Update: {
          auth_code?: string;
          authentication_method?: string;
          code_challenge?: string;
          code_challenge_method?: DatabaseAuth["auth"]["Enums"]["code_challenge_method"];
          created_at?: string | null;
          id?: string;
          provider_access_token?: string | null;
          provider_refresh_token?: string | null;
          provider_type?: string;
          updated_at?: string | null;
          user_id?: string | null;
        };
        Relationships: [];
      };
      identities: {
        Row: {
          created_at: string | null;
          email: string | null;
          id: string;
          identity_data: Json;
          last_sign_in_at: string | null;
          provider: string;
          updated_at: string | null;
          user_id: string;
        };
        Insert: {
          created_at?: string | null;
          email?: string | null;
          id: string;
          identity_data: Json;
          last_sign_in_at?: string | null;
          provider: string;
          updated_at?: string | null;
          user_id: string;
        };
        Update: {
          created_at?: string | null;
          email?: string | null;
          id?: string;
          identity_data?: Json;
          last_sign_in_at?: string | null;
          provider?: string;
          updated_at?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "identities_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      instances: {
        Row: {
          created_at: string | null;
          id: string;
          raw_base_config: string | null;
          updated_at: string | null;
          uuid: string | null;
        };
        Insert: {
          created_at?: string | null;
          id: string;
          raw_base_config?: string | null;
          updated_at?: string | null;
          uuid?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          raw_base_config?: string | null;
          updated_at?: string | null;
          uuid?: string | null;
        };
        Relationships: [];
      };
      mfa_amr_claims: {
        Row: {
          authentication_method: string;
          created_at: string;
          id: string;
          session_id: string;
          updated_at: string;
        };
        Insert: {
          authentication_method: string;
          created_at: string;
          id: string;
          session_id: string;
          updated_at: string;
        };
        Update: {
          authentication_method?: string;
          created_at?: string;
          id?: string;
          session_id?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "mfa_amr_claims_session_id_fkey";
            columns: ["session_id"];
            referencedRelation: "sessions";
            referencedColumns: ["id"];
          }
        ];
      };
      mfa_challenges: {
        Row: {
          created_at: string;
          factor_id: string;
          id: string;
          ip_address: unknown;
          verified_at: string | null;
        };
        Insert: {
          created_at: string;
          factor_id: string;
          id: string;
          ip_address: unknown;
          verified_at?: string | null;
        };
        Update: {
          created_at?: string;
          factor_id?: string;
          id?: string;
          ip_address?: unknown;
          verified_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "mfa_challenges_auth_factor_id_fkey";
            columns: ["factor_id"];
            referencedRelation: "mfa_factors";
            referencedColumns: ["id"];
          }
        ];
      };
      mfa_factors: {
        Row: {
          created_at: string;
          factor_type: DatabaseAuth["auth"]["Enums"]["factor_type"];
          friendly_name: string | null;
          id: string;
          secret: string | null;
          status: DatabaseAuth["auth"]["Enums"]["factor_status"];
          updated_at: string;
          user_id: string;
        };
        Insert: {
          created_at: string;
          factor_type: DatabaseAuth["auth"]["Enums"]["factor_type"];
          friendly_name?: string | null;
          id: string;
          secret?: string | null;
          status: DatabaseAuth["auth"]["Enums"]["factor_status"];
          updated_at: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          factor_type?: DatabaseAuth["auth"]["Enums"]["factor_type"];
          friendly_name?: string | null;
          id?: string;
          secret?: string | null;
          status?: DatabaseAuth["auth"]["Enums"]["factor_status"];
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "mfa_factors_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      refresh_tokens: {
        Row: {
          created_at: string | null;
          id: number;
          instance_id: string | null;
          parent: string | null;
          revoked: boolean | null;
          session_id: string | null;
          token: string | null;
          updated_at: string | null;
          user_id: string | null;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
          instance_id?: string | null;
          parent?: string | null;
          revoked?: boolean | null;
          session_id?: string | null;
          token?: string | null;
          updated_at?: string | null;
          user_id?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          instance_id?: string | null;
          parent?: string | null;
          revoked?: boolean | null;
          session_id?: string | null;
          token?: string | null;
          updated_at?: string | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "refresh_tokens_session_id_fkey";
            columns: ["session_id"];
            referencedRelation: "sessions";
            referencedColumns: ["id"];
          }
        ];
      };
      saml_providers: {
        Row: {
          attribute_mapping: Json | null;
          created_at: string | null;
          entity_id: string;
          id: string;
          metadata_url: string | null;
          metadata_xml: string;
          sso_provider_id: string;
          updated_at: string | null;
        };
        Insert: {
          attribute_mapping?: Json | null;
          created_at?: string | null;
          entity_id: string;
          id: string;
          metadata_url?: string | null;
          metadata_xml: string;
          sso_provider_id: string;
          updated_at?: string | null;
        };
        Update: {
          attribute_mapping?: Json | null;
          created_at?: string | null;
          entity_id?: string;
          id?: string;
          metadata_url?: string | null;
          metadata_xml?: string;
          sso_provider_id?: string;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "saml_providers_sso_provider_id_fkey";
            columns: ["sso_provider_id"];
            referencedRelation: "sso_providers";
            referencedColumns: ["id"];
          }
        ];
      };
      saml_relay_states: {
        Row: {
          created_at: string | null;
          for_email: string | null;
          from_ip_address: unknown | null;
          id: string;
          redirect_to: string | null;
          request_id: string;
          sso_provider_id: string;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string | null;
          for_email?: string | null;
          from_ip_address?: unknown | null;
          id: string;
          redirect_to?: string | null;
          request_id: string;
          sso_provider_id: string;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string | null;
          for_email?: string | null;
          from_ip_address?: unknown | null;
          id?: string;
          redirect_to?: string | null;
          request_id?: string;
          sso_provider_id?: string;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "saml_relay_states_sso_provider_id_fkey";
            columns: ["sso_provider_id"];
            referencedRelation: "sso_providers";
            referencedColumns: ["id"];
          }
        ];
      };
      schema_migrations: {
        Row: {
          version: string;
        };
        Insert: {
          version: string;
        };
        Update: {
          version?: string;
        };
        Relationships: [];
      };
      sessions: {
        Row: {
          aal: DatabaseAuth["auth"]["Enums"]["aal_level"] | null;
          created_at: string | null;
          factor_id: string | null;
          id: string;
          not_after: string | null;
          updated_at: string | null;
          user_id: string;
        };
        Insert: {
          aal?: DatabaseAuth["auth"]["Enums"]["aal_level"] | null;
          created_at?: string | null;
          factor_id?: string | null;
          id: string;
          not_after?: string | null;
          updated_at?: string | null;
          user_id: string;
        };
        Update: {
          aal?: DatabaseAuth["auth"]["Enums"]["aal_level"] | null;
          created_at?: string | null;
          factor_id?: string | null;
          id?: string;
          not_after?: string | null;
          updated_at?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "sessions_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      sso_domains: {
        Row: {
          created_at: string | null;
          domain: string;
          id: string;
          sso_provider_id: string;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string | null;
          domain: string;
          id: string;
          sso_provider_id: string;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string | null;
          domain?: string;
          id?: string;
          sso_provider_id?: string;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "sso_domains_sso_provider_id_fkey";
            columns: ["sso_provider_id"];
            referencedRelation: "sso_providers";
            referencedColumns: ["id"];
          }
        ];
      };
      sso_providers: {
        Row: {
          created_at: string | null;
          id: string;
          resource_id: string | null;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string | null;
          id: string;
          resource_id?: string | null;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          resource_id?: string | null;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      users: {
        Row: {
          aud: string | null;
          banned_until: string | null;
          confirmation_sent_at: string | null;
          confirmation_token: string | null;
          confirmed_at: string | null;
          created_at: string | null;
          deleted_at: string | null;
          email: string | null;
          email_change: string | null;
          email_change_confirm_status: number | null;
          email_change_sent_at: string | null;
          email_change_token_current: string | null;
          email_change_token_new: string | null;
          email_confirmed_at: string | null;
          encrypted_password: string | null;
          id: string;
          instance_id: string | null;
          invited_at: string | null;
          is_sso_user: boolean;
          is_super_admin: boolean | null;
          last_sign_in_at: string | null;
          phone: string | null;
          phone_change: string | null;
          phone_change_sent_at: string | null;
          phone_change_token: string | null;
          phone_confirmed_at: string | null;
          raw_app_meta_data: Json | null;
          raw_user_meta_data: Json | null;
          reauthentication_sent_at: string | null;
          reauthentication_token: string | null;
          recovery_sent_at: string | null;
          recovery_token: string | null;
          role: string | null;
          updated_at: string | null;
        };
        Insert: {
          aud?: string | null;
          banned_until?: string | null;
          confirmation_sent_at?: string | null;
          confirmation_token?: string | null;
          confirmed_at?: string | null;
          created_at?: string | null;
          deleted_at?: string | null;
          email?: string | null;
          email_change?: string | null;
          email_change_confirm_status?: number | null;
          email_change_sent_at?: string | null;
          email_change_token_current?: string | null;
          email_change_token_new?: string | null;
          email_confirmed_at?: string | null;
          encrypted_password?: string | null;
          id: string;
          instance_id?: string | null;
          invited_at?: string | null;
          is_sso_user?: boolean;
          is_super_admin?: boolean | null;
          last_sign_in_at?: string | null;
          phone?: string | null;
          phone_change?: string | null;
          phone_change_sent_at?: string | null;
          phone_change_token?: string | null;
          phone_confirmed_at?: string | null;
          raw_app_meta_data?: Json | null;
          raw_user_meta_data?: Json | null;
          reauthentication_sent_at?: string | null;
          reauthentication_token?: string | null;
          recovery_sent_at?: string | null;
          recovery_token?: string | null;
          role?: string | null;
          updated_at?: string | null;
        };
        Update: {
          aud?: string | null;
          banned_until?: string | null;
          confirmation_sent_at?: string | null;
          confirmation_token?: string | null;
          confirmed_at?: string | null;
          created_at?: string | null;
          deleted_at?: string | null;
          email?: string | null;
          email_change?: string | null;
          email_change_confirm_status?: number | null;
          email_change_sent_at?: string | null;
          email_change_token_current?: string | null;
          email_change_token_new?: string | null;
          email_confirmed_at?: string | null;
          encrypted_password?: string | null;
          id?: string;
          instance_id?: string | null;
          invited_at?: string | null;
          is_sso_user?: boolean;
          is_super_admin?: boolean | null;
          last_sign_in_at?: string | null;
          phone?: string | null;
          phone_change?: string | null;
          phone_change_sent_at?: string | null;
          phone_change_token?: string | null;
          phone_confirmed_at?: string | null;
          raw_app_meta_data?: Json | null;
          raw_user_meta_data?: Json | null;
          reauthentication_sent_at?: string | null;
          reauthentication_token?: string | null;
          recovery_sent_at?: string | null;
          recovery_token?: string | null;
          role?: string | null;
          updated_at?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      email: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      jwt: {
        Args: Record<PropertyKey, never>;
        Returns: Json;
      };
      role: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      uid: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
    };
    Enums: {
      aal_level: "aal1" | "aal2" | "aal3";
      code_challenge_method: "s256" | "plain";
      factor_status: "unverified" | "verified";
      factor_type: "totp" | "webauthn";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

export type User = DatabaseAuth["auth"]["Tables"]["users"];

export type Project = Database["public"]["Tables"]["Project"]["Row"];
export type Tag = Database["public"]["Tables"]["Tag"]["Row"];
export type ProjectTags = Database["public"]["Tables"]["project_tags"]["Row"];

export type CreateProject = Omit<
  Database["public"]["Tables"]["Project"]["Row"],
  "created_at" | "last_modified_at" | "id"
>;

export type CreateTag = Pick<Tag, "name">;
export type LinkProjectTag = Pick<ProjectTags, "project_id" | "tag_id">;
export type ProjectInfo = Project & {
  project_tags: ProjectTags &
    {
      Tag: Tag;
    }[];
};
