import React, { Component } from "react";
import { render } from "react-dom";

import Form from "@rjsf/material-ui";
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

const schema = {
  "$schema": "http://json-schema.org/draft-07/schema",
  "$id": "http://example.com/example.json",
  "type": "object",
  "title": "Value form",
  "description": "The value form takes input for JSON document.",
  "default": {},
  "examples": [
      {
          "owner_email": "PLACEHOLDER",
          "hostname": "PLACEHOLDER",
          "servers_ips": [
              "PLACEHOLDER"
          ],
          "servers_fqdns": [
              "PLACEHOLDER"
          ],
          "agents_ips": [
              "PLACEHOLDER"
          ],
          "ha": "false",
          "gpu_support": "false",
          "rke_token": "PLACEHOLDER",
          "telemetry_optout": "false",
          "certificate": {
              "host": {
                  "ca_file_path": "PLACEHOLDER",
                  "tls_file_path": "PLACEHOLDER",
                  "key_file_path": "PLACEHOLDER"
              },
              "identity": {
                  "token_signing_cert_file": "PLACEHOLDER",
                  "token_signing_cert_pass": "PLACEHOLDER",
                  "saml_current_signing_cert_file": "PLACEHOLDER",
                  "saml_current_signing_cert_pass": "PLACEHOLDER",
                  "saml_future_signing_cert_file": "PLACEHOLDER",
                  "saml_future_signing_cert_pass": "PLACEHOLDER"
              }
          },
          "registries": {
              "docker": {
                  "url": "placeholder",
                  "username": "",
                  "password": "",
                  "pull_secret_value": ""
              },
              "helm": {
                  "url": "placeholder",
                  "username": "",
                  "password": ""
              }
          },
          "orchestrator": {
              "sql_connection_str": "PLACEHOLDER",
              "ta_sql_connection_str": "PLACEHOLDER",
              "upd_sql_connection_str": "PLACEHOLDER"
          },
          "identity": {
              "host_admin_username": "PLACEHOLDER",
              "host_admin_password": "PLACEHOLDER",
              "sql_connection_str": "PLACEHOLDER"
          },
          "location": {
              "sql_connection_str": "PLACEHOLDER"
          },
          "oms": {
              "sql_connection_str": "PLACEHOLDER"
          },
          "lrm": {
              "sql_connection_str": "PLACEHOLDER"
          },
          "la": {
              "sql_connection_str": "PLACEHOLDER"
          },
          "audit": {
              "sql_connection_str": "PLACEHOLDER"
          },
          "automation_ops": {
              "enabled": false,
              "sql_connection_str": "PLACEHOLDER"
          },
          "insights": {
              "enabled": false,
              "data_sql_connection_str": "PLACEHOLDER",
              "sql_connection_str": "PLACEHOLDER"
          },
          "task_mining": {
              "enabled": false
          },
          "automation_hub": {
              "enabled": false,
              "sql_connection_str": "PLACEHOLDER"
          },
          "aicenter": {
              "enabled": false,
              "sql": {
                  "username": "PLACEHOLDER",
                  "password": "PLACEHOLDER",
                  "ai_helper_databaseName": "PLACEHOLDER",
                  "ai_pkgmanager_databaseName": "PLACEHOLDER",
                  "ai_deployer_databaseName": "PLACEHOLDER",
                  "ai_trainer_databaseName": "PLACEHOLDER",
                  "host": "PLACEHOLDER"
              }
          },
          "test_manager": {
              "enabled": false,
              "sql_connection_str": "PLACEHOLDER"
          },
          "action_center": {
              "enabled": false
          },
          "business_apps": {
              "enabled": false
          },
          "document_understanding": {
              "enabled": false
          }
      }
  ],
  "required": [
      "owner_email",
      "hostname",
      "servers_ips",
      "servers_fqdns",
      "agents_ips",
      "ha",
      "gpu_support",
      "rke_token",
      "certificate",
      "registries",
      "orchestrator",
      "identity",
      "location",
      "oms",
      "lrm",
      "la",
      "audit"
  ],
  "properties": {
      "owner_email": {
          "$id": "#/properties/owner_email",
          "type": "string",
          "title": "Email Address",
          "description": "provide email address eg- abc@gmail.com",
          "default": "",
          "examples": [
              "PLACEHOLDER"
          ]
      },
      "hostname": {
          "$id": "#/properties/hostname",
          "type": "string",
          "title": "Host name",
          "minLength": 3,
          "description": "The fully qualified name of the load balancer",
          "default": "",
          "examples": [
              "PLACEHOLDER"
          ]
      },
      "servers_ips": {
          "$id": "#/properties/servers_ips",
          "type": "array",
          "title": "Server IP",
          "description": "List of IPs of the VMs which will be part of the cluster",
          "default": [],
          "examples": [
              [
                  "PLACEHOLDER"
              ]
          ],
          "additionalItems": true,
          "items": {
              "$id": "#/properties/servers_ips/items",
              "anyOf": [
                  {
                      "$id": "#/properties/servers_ips/items/anyOf/0",
                      "type": "string",
                      "title": "New Item",
                      "description": "",
                      "default": "",
                      "examples": [
                          "PLACEHOLDER"
                      ]
                  }
              ]
          }
      },
      "servers_fqdns": {
          "$id": "#/properties/servers_fqdns",
          "type": "array",
          "title": "Fully Qualified Domain Name (Server FQDN)",
          "description": "List of fully qualified domain names of the VMs which will be part of the cluster",
          "default": [],
          "examples": [
              [
                  "PLACEHOLDER"
              ]
          ],
          "additionalItems": true,
          "items": {
              "$id": "#/properties/servers_fqdns/items",
              "anyOf": [
                  {
                      "$id": "#/properties/servers_fqdns/items/anyOf/0",
                      "type": "string",
                      "title": "New Item",
                      "description": "",
                      "default": "",
                      "examples": [
                          "PLACEHOLDER"
                      ]
                  }
              ]
          }
      },
      "agents_ips": {
          "$id": "#/properties/agents_ips",
          "type": "array",
          "title": "Agent IP",
          "description": "",
          "default": [],
          "examples": [
              [
                  "PLACEHOLDER"
              ]
          ],
          "additionalItems": true,
          "items": {
              "$id": "#/properties/agents_ips/items",
              "anyOf": [
                  {
                      "$id": "#/properties/agents_ips/items/anyOf/0",
                      "type": "string",
                      "title": "New Item",
                      "description": "",
                      "default": "",
                      "examples": [
                          "PLACEHOLDER"
                      ]
                  }
              ]
          }
      },
      "ha": {
          "$id": "#/properties/ha",
          "type": "boolean",
          "title": "High Availability",
          "description": "Sets the High Availability mode of the installer. When ha is set to true (String, not boolean), then all the services will be deployed with a High Availability setting. When set to false, single pods per service will be deployed.",
          "default": "",
          "examples": [
              "false"
          ]
      },
      "gpu_support": {
          "$id": "#/properties/gpu_support",
          "type": "boolean",
          "title": "GPU Support",
          "description": "GPU support toggle, indicating if GPU support is required",
          "default": "",
          "examples": [
              "false"
          ]
      },
      "rke_token": {
          "$id": "#/properties/rke_token",
          "type": "string",
          "title": "RKE Token (Rancher Kubernetes Engine)",
          "description": "Common string which is used at install time to join nodes to the cluster. Should be a randomly generated string.",
          "default": "",
          "examples": [
              "PLACEHOLDER"
          ]
      },
      "telemetry_optout": {
          "$id": "#/properties/telemetry_optout",
          "type": "string",
          "title": "Telemetry Optout",
          "description": "Opt out of UiPath telemetry. It is to help analyze product usage to better improve the products.",
          "default": "false",
          "examples": [
              "false"
          ]
      },
      "certificate": {
          "$id": "#/properties/certificate",
          "type": "object",
          "title": "Certificate",
          "description": "Information about the certificates used for the deployment",
          "default": {},
          "examples": [
              {
                  "host": {
                      "ca_file_path": "PLACEHOLDER",
                      "tls_file_path": "PLACEHOLDER",
                      "key_file_path": "PLACEHOLDER"
                  },
                  "identity": {
                      "token_signing_cert_file": "PLACEHOLDER",
                      "token_signing_cert_pass": "PLACEHOLDER",
                      "saml_current_signing_cert_file": "PLACEHOLDER",
                      "saml_current_signing_cert_pass": "PLACEHOLDER",
                      "saml_future_signing_cert_file": "PLACEHOLDER",
                      "saml_future_signing_cert_pass": "PLACEHOLDER"
                  }
              }
          ],
          "required": [
              "host",
              "identity"
          ],
          "properties": {
              "host": {
                  "$id": "#/properties/certificate/properties/host",
                  "type": "object",
                  "title": "Host",
                  "description": "",
                  "default": {},
                  "examples": [
                      {
                          "ca_file_path": "PLACEHOLDER",
                          "tls_file_path": "PLACEHOLDER",
                          "key_file_path": "PLACEHOLDER"
                      }
                  ],
                  "required": [
                      "ca_file_path",
                      "tls_file_path",
                      "key_file_path"
                  ],
                  "properties": {
                      "ca_file_path": {
                          "$id": "#/properties/certificate/properties/host/properties/ca_file_path",
                          "type": "string",
                          "title": "CA File Path",
                          "description": "",
                          "default": "",
                          "examples": [
                              "PLACEHOLDER"
                          ]
                      },
                      "tls_file_path": {
                          "$id": "#/properties/certificate/properties/host/properties/tls_file_path",
                          "type": "string",
                          "title": "TLS File Path",
                          "description": "",
                          "default": "",
                          "examples": [
                              "PLACEHOLDER"
                          ]
                      },
                      "key_file_path": {
                          "$id": "#/properties/certificate/properties/host/properties/key_file_path",
                          "type": "string",
                          "title": "Key File Path",
                          "description": "",
                          "default": "",
                          "examples": [
                              "PLACEHOLDER"
                          ]
                      }
                  }
              },
              "identity": {
                  "$id": "#/properties/certificate/properties/identity",
                  "type": "object",
                  "title": "Identity",
                  "description": "",
                  "default": {},
                  "examples": [
                      {
                          "token_signing_cert_file": "PLACEHOLDER",
                          "token_signing_cert_pass": "PLACEHOLDER",
                          "saml_current_signing_cert_file": "PLACEHOLDER",
                          "saml_current_signing_cert_pass": "PLACEHOLDER",
                          "saml_future_signing_cert_file": "PLACEHOLDER",
                          "saml_future_signing_cert_pass": "PLACEHOLDER"
                      }
                  ],
                  "required": [
                      "token_signing_cert_file",
                      "token_signing_cert_pass",
                      "saml_current_signing_cert_file",
                      "saml_current_signing_cert_pass",
                      "saml_future_signing_cert_file",
                      "saml_future_signing_cert_pass"
                  ],
                  "properties": {
                      "token_signing_cert_file": {
                          "$id": "#/properties/certificate/properties/identity/properties/token_signing_cert_file",
                          "type": "string",
                          "title": "Token Signing Certificate File",
                          "description": "",
                          "default": "",
                          "examples": [
                              "PLACEHOLDER"
                          ]
                      },
                      "token_signing_cert_pass": {
                          "$id": "#/properties/certificate/properties/identity/properties/token_signing_cert_pass",
                          "type": "string",
                          "title": "Token Signing Certificate Pass",
                          "description": "",
                          "default": "",
                          "examples": [
                              "PLACEHOLDER"
                          ]
                      },
                      "saml_current_signing_cert_file": {
                          "$id": "#/properties/certificate/properties/identity/properties/saml_current_signing_cert_file",
                          "type": "string",
                          "title": "SAML Current Signing Certificate File",
                          "description": "",
                          "default": "",
                          "examples": [
                              "PLACEHOLDER"
                          ]
                      },
                      "saml_current_signing_cert_pass": {
                          "$id": "#/properties/certificate/properties/identity/properties/saml_current_signing_cert_pass",
                          "type": "string",
                          "title": "SAML Current Signing Certificate Pass",
                          "description": "",
                          "default": "",
                          "examples": [
                              "PLACEHOLDER"
                          ]
                      },
                      "saml_future_signing_cert_file": {
                          "$id": "#/properties/certificate/properties/identity/properties/saml_future_signing_cert_file",
                          "type": "string",
                          "title": "SAML Future Signing Certificate File",
                          "description": "",
                          "default": "",
                          "examples": [
                              "PLACEHOLDER"
                          ]
                      },
                      "saml_future_signing_cert_pass": {
                          "$id": "#/properties/certificate/properties/identity/properties/saml_future_signing_cert_pass",
                          "type": "string",
                          "title": "SAML Future Signing Certificate Pass",
                          "description": "",
                          "default": "",
                          "examples": [
                              "PLACEHOLDER"
                          ]
                      }
                  }
              }
          }
      },
      "registries": {
          "$id": "#/properties/registries",
          "type": "object",
          "title": "Registries",
          "description": "Endpoints and credentials for the registries where the installation artifacts are located",
          "default": {},
          "examples": [
              {
                  "docker": {
                      "url": "placeholder",
                      "username": "",
                      "password": "",
                      "pull_secret_value": ""
                  },
                  "helm": {
                      "url": "placeholder",
                      "username": "",
                      "password": ""
                  }
              }
          ],
          "required": [
              "docker",
              "helm"
          ],
          "properties": {
              "docker": {
                  "$id": "#/properties/registries/properties/docker",
                  "type": "object",
                  "title": "Docker",
                  "description": "",
                  "default": {},
                  "examples": [
                      {
                          "url": "placeholder",
                          "username": "",
                          "password": "",
                          "pull_secret_value": ""
                      }
                  ],
                  "required": [
                      "url",
                      "username",
                      "password",
                      "pull_secret_value"
                  ],
                  "properties": {
                      "url": {
                          "$id": "#/properties/registries/properties/docker/properties/url",
                          "type": "string",
                          "title": "Docker URL",
                          "description": "",
                          "default": "",
                          "examples": [
                              "placeholder"
                          ]
                      },
                      "username": {
                          "$id": "#/properties/registries/properties/docker/properties/username",
                          "type": "string",
                          "title": "Docker Username",
                          "description": "",
                          "default": "",
                          "examples": [
                              ""
                          ]
                      },
                      "password": {
                          "$id": "#/properties/registries/properties/docker/properties/password",
                          "type": "string",
                          "title": "Docker Password",
                          "description": "",
                          "default": "",
                          "examples": [
                              ""
                          ]
                      },
                      "pull_secret_value": {
                          "$id": "#/properties/registries/properties/docker/properties/pull_secret_value",
                          "type": "string",
                          "title": "Docker Pull Secret Value",
                          "description": "",
                          "default": "",
                          "examples": [
                              ""
                          ]
                      }
                  }
              },
              "helm": {
                  "$id": "#/properties/registries/properties/helm",
                  "type": "object",
                  "title": "Helm",
                  "description": "",
                  "default": {},
                  "examples": [
                      {
                          "url": "placeholder",
                          "username": "",
                          "password": ""
                      }
                  ],
                  "required": [
                      "url",
                      "username",
                      "password"
                  ],
                  "properties": {
                      "url": {
                          "$id": "#/properties/registries/properties/helm/properties/url",
                          "type": "string",
                          "title": "Helm URL",
                          "description": "",
                          "default": "",
                          "examples": [
                              "placeholder"
                          ]
                      },
                      "username": {
                          "$id": "#/properties/registries/properties/helm/properties/username",
                          "type": "string",
                          "title": "Helm Username",
                          "description": "",
                          "default": "",
                          "examples": [
                              ""
                          ]
                      },
                      "password": {
                          "$id": "#/properties/registries/properties/helm/properties/password",
                          "type": "string",
                          "title": "Helm Password",
                          "description": "",
                          "default": "",
                          "examples": [
                              ""
                          ]
                      }
                  }
              }
          }
      },
      "orchestrator": {
          "$id": "#/properties/orchestrator",
          "type": "object",
          "title": "Orchestrator",
          "description": "Orchestrator configuration object",
          "default": {},
          "examples": [
              {
                  "sql_connection_str": "PLACEHOLDER",
                  "ta_sql_connection_str": "PLACEHOLDER",
                  "upd_sql_connection_str": "PLACEHOLDER"
              }
          ],
          "required": [
              "sql_connection_str",
              "ta_sql_connection_str",
              "upd_sql_connection_str"
          ],
          "properties": {
              "sql_connection_str": {
                  "$id": "#/properties/orchestrator/properties/sql_connection_str",
                  "type": "string",
                  "title": "SQL Connection String",
                  "description": "",
                  "default": "",
                  "examples": [
                      "PLACEHOLDER"
                  ]
              },
              "ta_sql_connection_str": {
                  "$id": "#/properties/orchestrator/properties/ta_sql_connection_str",
                  "type": "string",
                  "title": "Tag SQL Connection String",
                  "description": "",
                  "default": "",
                  "examples": [
                      "PLACEHOLDER"
                  ]
              },
              "upd_sql_connection_str": {
                  "$id": "#/properties/orchestrator/properties/upd_sql_connection_str",
                  "type": "string",
                  "title": "Update SQL Connection String",
                  "description": "",
                  "default": "",
                  "examples": [
                      "PLACEHOLDER"
                  ]
              }
          }
      },
      "identity": {
          "$id": "#/properties/identity",
          "type": "object",
          "title": "Identity",
          "description": "Identity server configuration object",
          "default": {},
          "examples": [
              {
                  "host_admin_username": "PLACEHOLDER",
                  "host_admin_password": "PLACEHOLDER",
                  "sql_connection_str": "PLACEHOLDER"
              }
          ],
          "required": [
              "host_admin_username",
              "host_admin_password",
              "sql_connection_str"
          ],
          "properties": {
              "host_admin_username": {
                  "$id": "#/properties/identity/properties/host_admin_username",
                  "type": "string",
                  "title": "Host Admin Username",
                  "description": "",
                  "default": "",
                  "examples": [
                      "PLACEHOLDER"
                  ]
              },
              "host_admin_password": {
                  "$id": "#/properties/identity/properties/host_admin_password",
                  "type": "string",
                  "title": "Host Admin Password",
                  "description": "",
                  "default": "",
                  "examples": [
                      "PLACEHOLDER"
                  ]
              },
              "sql_connection_str": {
                  "$id": "#/properties/identity/properties/sql_connection_str",
                  "type": "string",
                  "title": "SQL Connection String",
                  "description": "",
                  "default": "",
                  "examples": [
                      "PLACEHOLDER"
                  ]
              }
          }
      },
      "location": {
          "$id": "#/properties/location",
          "type": "object",
          "title": "Location",
          "description": "Location services configuration object",
          "default": {},
          "examples": [
              {
                  "sql_connection_str": "PLACEHOLDER"
              }
          ],
          "required": [
              "sql_connection_str"
          ],
          "properties": {
              "sql_connection_str": {
                  "$id": "#/properties/location/properties/sql_connection_str",
                  "type": "string",
                  "title": "SQL Connection String",
                  "description": "",
                  "default": "",
                  "examples": [
                      "PLACEHOLDER"
                  ]
              }
          }
      },
      "oms": {
          "$id": "#/properties/oms",
          "type": "object",
          "title": "Organization Mangement System (OMS)",
          "description": "Organization management system configuration object",
          "default": {},
          "examples": [
              {
                  "sql_connection_str": "PLACEHOLDER"
              }
          ],
          "required": [
              "sql_connection_str"
          ],
          "properties": {
              "sql_connection_str": {
                  "$id": "#/properties/oms/properties/sql_connection_str",
                  "type": "string",
                  "title": "SQL Connection String",
                  "description": "",
                  "default": "",
                  "examples": [
                      "PLACEHOLDER"
                  ]
              }
          }
      },
      "lrm": {
          "$id": "#/properties/lrm",
          "type": "object",
          "title": "License Resource Manager (LRM)",
          "description": "Organization management system configuration object",
          "default": {},
          "examples": [
              {
                  "sql_connection_str": "PLACEHOLDER"
              }
          ],
          "required": [
              "sql_connection_str"
          ],
          "properties": {
              "sql_connection_str": {
                  "$id": "#/properties/lrm/properties/sql_connection_str",
                  "type": "string",
                  "title": "SQL Connection String",
                  "description": "",
                  "default": "",
                  "examples": [
                      "PLACEHOLDER"
                  ]
              }
          }
      },
      "la": {
          "$id": "#/properties/la",
          "type": "object",
          "title": "License Accountant (LA)",
          "description": "Organization management system configuration object",
          "default": {},
          "examples": [
              {
                  "sql_connection_str": "PLACEHOLDER"
              }
          ],
          "required": [
              "sql_connection_str"
          ],
          "properties": {
              "sql_connection_str": {
                  "$id": "#/properties/la/properties/sql_connection_str",
                  "type": "string",
                  "title": "SQL Connection String",
                  "description": "",
                  "default": "",
                  "examples": [
                      "PLACEHOLDER"
                  ]
              }
          }
      },
      "audit": {
          "$id": "#/properties/audit",
          "type": "object",
          "title": "Audit",
          "description": "",
          "default": {},
          "examples": [
              {
                  "sql_connection_str": "PLACEHOLDER"
              }
          ],
          "required": [
              "sql_connection_str"
          ],
          "properties": {
              "sql_connection_str": {
                  "$id": "#/properties/audit/properties/sql_connection_str",
                  "type": "string",
                  "title": "SQL Connection String",
                  "description": "",
                  "default": "",
                  "examples": [
                      "PLACEHOLDER"
                  ]
              }
          }
      },
      "automation_ops": {
          "$id": "#/properties/automation_ops",
          "type": "object",
          "title": "Automation Operations",
          "description": "Automation Ops system configuration object",
          "default": {},
          "examples": [
              {
                  "enabled": false
              }
          ],
          "required": [
              "enabled"
          ],
          "properties": {
              "enabled": {
                  "$id": "#/properties/automation_ops/properties/enabled",
                  "type": "boolean",
                  "title": "Enabled",
                  "description": "",
                  "default": false,
                  "examples": [
                      false
                  ]
              }
          },
          "dependencies": {
              "enabled": {
                  "oneOf": [
                      {
                          "properties": {
                              "enabled": {
                                  "const": false
                              }
                          }
                      },
                      {
                          "properties": {
                              "enabled": {
                                  "const": true
                              },
                              "sql_connection_str": {
                                "$id": "#/properties/test_manager/properties/sql_connection_str",
                                "type": "string",
                                "title": "SQL Connection String",
                                "description": "",
                                "default": "",
                                "examples": [
                                    "PLACEHOLDER"
                                ]
                              },
                              "required": [
                                  "sql_connection_str"
                              ]
                          },
                          
                      }
                  ]
              }
          }
      },
      "insights": {
          "$id": "#/properties/insights",
          "type": "object",
          "title": "Insights",
          "description": "Insights server configuration object",
          "default": {},
          "examples": [
              {
                  "enabled": false,
                  "data_sql_connection_str": "PLACEHOLDER",
                  "sql_connection_str": "PLACEHOLDER"
              }
          ],
          "required": [
              "enabled",
              "data_sql_connection_str",
              "sql_connection_str"
          ],
          "properties": {
              "enabled": {
                  "$id": "#/properties/insights/properties/enabled",
                  "type": "boolean",
                  "title": "Enabled",
                  "description": "",
                  "default": false,
                  "examples": [
                      false
                  ]
              }
          },
          "dependencies": {
              "enabled": {
                  "oneOf": [
                      {
                          "properties": {
                              "enabled": {
                                  "const": false
                              }
                          }
                      },
                      {
                          "properties": {
                              "enabled": {
                                  "const": true
                              },
                              "data_sql_connection_str": {
                                "$id": "#/properties/insights/properties/data_sql_connection_str",
                                "type": "string",
                                "title": "Data SQL Connection String",
                                "description": "",
                                "default": "",
                                "examples": [
                                    "PLACEHOLDER"
                                ]
                              },
                              "sql_connection_str": {
                                "$id": "#/properties/test_manager/properties/sql_connection_str",
                                "type": "string",
                                "title": "SQL Connection String",
                                "description": "",
                                "default": "",
                                "examples": [
                                    "PLACEHOLDER"
                                ]
                              },
                              "required": [
                                  "data_sql_connection_str",
                                  "sql_connection_str"
                              ]
                          },
                          
                      }
                  ]
              }
          }
      },
      "task_mining": {
          "$id": "#/properties/task_mining",
          "type": "object",
          "title": "Task Mining",
          "description": "Task Mining system configuration object",
          "default": {},
          "examples": [
              {
                  "enabled": false
              }
          ],
          "required": [
              "enabled"
          ],
          "properties": {
              "enabled": {
                  "$id": "#/properties/task_mining/properties/enabled",
                  "type": "boolean",
                  "title": "Enabled",
                  "description": "",
                  "default": false,
                  "examples": [
                      false
                  ]
              }
          },
          "dependencies": {
              "enabled": {
                  "oneOf": [
                      {
                          "properties": {
                              "enabled": {
                                  "const": false
                              }
                          }
                      },
                      {
                          "properties": {
                              "enabled": {
                                  "const": true
                              },
                              "sql_connection_str": {
                                "$id": "#/properties/test_manager/properties/sql_connection_str",
                                "type": "string",
                                "title": "SQL Connection String",
                                "description": "",
                                "default": "",
                                "examples": [
                                    "PLACEHOLDER"
                                ]
                              },
                              "required": [
                                  "sql_connection_str"
                              ]
                          },
                          
                      }
                  ]
              }
          }
      },
      "automation_hub": {
          "$id": "#/properties/automation_hub",
          "type": "object",
          "title": "Automation Hub",
          "description": "Automation Hub configuration object",
          "default": {},
          "examples": [
              {
                  "enabled": false
              }
          ],
          "required": [
              "enabled"
          ],
          "properties": {
              "enabled": {
                  "$id": "#/properties/automation_hub/properties/enabled",
                  "type": "boolean",
                  "title": "Enabled",
                  "description": "",
                  "default": false,
                  "examples": [
                      false
                  ]
              }
          },
          "dependencies": {
              "enabled": {
                  "oneOf": [
                      {
                          "properties": {
                              "enabled": {
                                  "const": false
                              }
                          }
                      },
                      {
                          "properties": {
                              "enabled": {
                                  "const": true
                              },
                              "sql_connection_str": {
                                "$id": "#/properties/test_manager/properties/sql_connection_str",
                                "type": "string",
                                "title": "SQL Connection String",
                                "description": "",
                                "default": "",
                                "examples": [
                                    "PLACEHOLDER"
                                ]
                              },
                              "required": [
                                  "sql_connection_str"
                              ]
                          },
                          
                      }
                  ]
              }
          }
      },
      "aicenter": {
          "$id": "#/properties/aicenter",
          "type": "object",
          "title": "AI Center",
          "description": "AICenter configuration specification",
          "default": {},
          "examples": [
              {
                  "enabled": false,
                  "sql": {
                      "username": "PLACEHOLDER",
                      "password": "PLACEHOLDER",
                      "ai_helper_databaseName": "PLACEHOLDER",
                      "ai_pkgmanager_databaseName": "PLACEHOLDER",
                      "ai_deployer_databaseName": "PLACEHOLDER",
                      "ai_trainer_databaseName": "PLACEHOLDER",
                      "host": "PLACEHOLDER"
                  }
              }
          ],
          "required": [
              "enabled"
          ],
          "properties": {
              "enabled": {
                  "$id": "#/properties/aicenter/properties/enabled",
                  "type": "boolean",
                  "title": "Enabled",
                  "description": "",
                  "default": false,
                  "examples": [
                      false
                  ]
              }
          },
          "dependencies": {
            "enabled": {
                "oneOf": [
                    {
                        "properties": {
                            "enabled": {
                                "const": false
                            }
                        }
                    },
                    {
                        "properties": {
                            "enabled": {
                                "const": true
                            },
                            "sql": {
                                "$id": "#/properties/aicenter/properties/sql",
                                "type": "object",
                                "title": "SQL",
                                "description": "",
                                "default": {},
                                "examples": [
                                    {
                                        "username": "PLACEHOLDER",
                                        "password": "PLACEHOLDER",
                                        "ai_helper_databaseName": "PLACEHOLDER",
                                        "ai_pkgmanager_databaseName": "PLACEHOLDER",
                                        "ai_deployer_databaseName": "PLACEHOLDER",
                                        "ai_trainer_databaseName": "PLACEHOLDER",
                                        "host": "PLACEHOLDER"
                                    }
                                ],
                                "required": [
                                    "username",
                                    "password",
                                    "ai_helper_databaseName",
                                    "ai_pkgmanager_databaseName",
                                    "ai_deployer_databaseName",
                                    "ai_trainer_databaseName",
                                    "host"
                                ],
                                "properties": {
                                    "username": {
                                        "$id": "#/properties/aicenter/properties/sql/properties/username",
                                        "type": "string",
                                        "title": "SQL Username",
                                        "description": "",
                                        "default": "",
                                        "examples": [
                                            "PLACEHOLDER"
                                        ]
                                    },
                                    "password": {
                                        "$id": "#/properties/aicenter/properties/sql/properties/password",
                                        "type": "string",
                                        "title": "SQL Password",
                                        "description": "",
                                        "default": "",
                                        "examples": [
                                            "PLACEHOLDER"
                                        ]
                                    },
                                    "ai_helper_databaseName": {
                                        "$id": "#/properties/aicenter/properties/sql/properties/ai_helper_databaseName",
                                        "type": "string",
                                        "title": "AI Center Helper Database Name",
                                        "description": "",
                                        "default": "",
                                        "examples": [
                                            "PLACEHOLDER"
                                        ]
                                    },
                                    "ai_pkgmanager_databaseName": {
                                        "$id": "#/properties/aicenter/properties/sql/properties/ai_pkgmanager_databaseName",
                                        "type": "string",
                                        "title": "AI Package Manager Database Name",
                                        "description": "",
                                        "default": "",
                                        "examples": [
                                            "PLACEHOLDER"
                                        ]
                                    },
                                    "ai_deployer_databaseName": {
                                        "$id": "#/properties/aicenter/properties/sql/properties/ai_deployer_databaseName",
                                        "type": "string",
                                        "title": "AI Deployer Database Name",
                                        "description": "",
                                        "default": "",
                                        "examples": [
                                            "PLACEHOLDER"
                                        ]
                                    },
                                    "ai_trainer_databaseName": {
                                        "$id": "#/properties/aicenter/properties/sql/properties/ai_trainer_databaseName",
                                        "type": "string",
                                        "title": "AI Trainer Database Name",
                                        "description": "",
                                        "default": "",
                                        "examples": [
                                            "PLACEHOLDER"
                                        ]
                                    },
                                    "host": {
                                        "$id": "#/properties/aicenter/properties/sql/properties/host",
                                        "type": "string",
                                        "title": "SQL Host",
                                        "description": "",
                                        "default": "",
                                        "examples": [
                                            "PLACEHOLDER"
                                        ]
                                    }
                                }
                            },
                            "required": [
                                "sql"
                            ]
                        },
                        
                    }
                ]
            }
        }
      },
      "test_manager": {
          "$id": "#/properties/test_manager",
          "type": "object",
          "title": "Test Manager",
          "description": "Test manager configuration object",
          "default": {},
          "examples": [
              {
                  "enabled": false
              }
          ],
          "required": [
              "enabled"
          ],
          "properties": {
              "enabled": {
                  "$id": "#/properties/test_manager/properties/enabled",
                  "type": "boolean",
                  "title": "Enabled",
                  "description": "",
                  "default": false,
                  "examples": [
                      false
                  ]
              }
          },
          "dependencies": {
              "enabled": {
                  "oneOf": [
                      {
                          "properties": {
                              "enabled": {
                                  "const": false
                              }
                          }
                      },
                      {
                          "properties": {
                              "enabled": {
                                  "const": true
                              },
                              "sql_connection_str": {
                                "$id": "#/properties/test_manager/properties/sql_connection_str",
                                "type": "string",
                                "title": "SQL Connection String",
                                "description": "",
                                "default": "",
                                "examples": [
                                    "PLACEHOLDER"
                                ]
                              },
                              "required": [
                                  "sql_connection_str"
                              ]
                          },
                          
                      }
                  ]
              }
          }
      },
      "action_center": {
          "$id": "#/properties/action_center",
          "type": "object",
          "title": "Action Center",
          "description": "Action Center configuration specification",
          "default": {},
          "examples": [
              {
                  "enabled": false
              }
          ],
          "required": [
              "enabled"
          ],
          "properties": {
              "enabled": {
                  "$id": "#/properties/action_center/properties/enabled",
                  "type": "boolean",
                  "title": "Enabled",
                  "description": "",
                  "default": false,
                  "examples": [
                      false
                  ]
              }
          }
      },
      "business_apps": {
          "$id": "#/properties/business_apps",
          "type": "object",
          "title": "Business Apps",
          "description": "Business Apps configuration specification",
          "default": {},
          "examples": [
              {
                  "enabled": false
              }
          ],
          "required": [
              "enabled"
          ],
          "properties": {
              "enabled": {
                  "$id": "#/properties/business_apps/properties/enabled",
                  "type": "boolean",
                  "title": "Enabled",
                  "description": "",
                  "default": false,
                  "examples": [
                      false
                  ]
              }
          }
      },
      "document_understanding": {
          "$id": "#/properties/document_understanding",
          "type": "object",
          "title": "Document Understanding",
          "description": "Document Understanding configuration specification",
          "default": {},
          "examples": [
              {
                  "enabled": false
              }
          ],
          "required": [
              "enabled"
          ],
          "properties": {
              "enabled": {
                  "$id": "#/properties/document_understanding/properties/enabled",
                  "type": "boolean",
                  "title": "Enabled",
                  "description": "",
                  "default": false,
                  "examples": [
                      false
                  ]
              }
          }
      }
  }
};

const formData = {
    "owner_email": "",
    "hostname": "",
    "servers_ips": [],
    "servers_fqdns": [],
    "agents_ips": [],
    "ha": "",
    "gpu_support": "",
    "rke_token": "",
    "telemetry_optout": "",
    "certificate": {
      "host": {
        "ca_file_path": "",
        "tls_file_path": "",
        "key_file_path": ""
      },
      "identity": {
        "token_signing_cert_file": "",
        "token_signing_cert_pass": "",
        "saml_current_signing_cert_file": "",
        "saml_current_signing_cert_pass": "",
        "saml_future_signing_cert_file": "",
        "saml_future_signing_cert_pass": ""
      }
    },
    "registries": {
      "docker": {
        "url": "",
        "username": "",
        "password": "",
        "pull_secret_value": ""
      },
      "helm": {
        "url": "",
        "username": "",
        "password": ""
      }
    },
    "orchestrator": {
      "sql_connection_str": "",
      "ta_sql_connection_str": "",
      "upd_sql_connection_str": ""
    },
    "identity": {
      "host_admin_username": "",
      "host_admin_password": "",
      "sql_connection_str": ""
    },
    "location": {
      "sql_connection_str": ""
    },
    "oms": {
      "sql_connection_str": ""
    },
    "lrm": {
      "sql_connection_str": ""
    },
    "la": {
      "sql_connection_str": ""
    },
    "audit": {
      "sql_connection_str": ""
    },
    "automation_ops": {
      "enabled": false
    },
    "insights": {
      "enabled": false
    },
    "task_mining": {
      "enabled": false
    },
    "automation_hub": {
      "enabled": false
    },
    "aicenter": {
      "enabled": false,
      "sql": {}
    },
    "test_manager": {
      "enabled": false
    },
    "action_center": {
      "enabled": false
    },
    "business_apps": {
      "enabled": false
    },
    "document_understanding": {
      "enabled": false
    }
}

const log = type => console.log.bind(console, type);
//const onSubmit = ({formData}, e) => console.log("Data submitted: ",  formData);
//const onChange = ({formData}, e) => console.log("Data changed: ",  formData);

class App extends Component {
    constructor(props) {
      super(props)
      const defaultFileType = "json"
      this.fileNames = {json: "input.json"}
      this.state = {
          formData: formData,
          fileType: defaultFileType,
          status: ""
      }
      this.handleChange = this.handleChange.bind(this)
      this.changeFileType = this.changeFileType.bind(this)
  	  this.download = this.download.bind(this)
    }
    changeFileType (event) {
        const value = event.target.value;
        this.setState({fileType: value});
    }
    download (event) {
        let output;
        output = JSON.stringify({states: this.state.formData}, null, 4);
        const blob = new Blob([output]);
        const fileDownloadUrl = URL.createObjectURL(blob);
        this.setState ({fileDownloadUrl: fileDownloadUrl}, 
        () => {
            this.dofileDownload.click(); 
            URL.revokeObjectURL(fileDownloadUrl)
            this.setState({fileDownloadUrl: ""})
    }) 
    }
    handleChange(data) {
        this.setState({ formData: data.formData });  
    }
    render () {
      return (
        <div>
            <div style={{width: "60%", display: "inline-block"}}><Box border={4} borderBottom={2} m={0.5} marginBottom={0} paddingLeft={1}><h1>Form to generate json file</h1></Box></div>
            <div style={{width: "40%", display: "inline-block"}}><Box border={4} borderBottom={2} m={0.5} marginBottom={0} paddingLeft={1}><h1>Json file with live changes</h1></Box></div>
            <div style={{width: "60%", display: "inline-block"}}><Box border={4} borderTop={2} m={0.5} marginTop={0} paddingLeft={1} paddingBottom={0.5}><Paper style={{height: 800, overflow: 'auto'}}>
                <div style={{width: "99%", height: "99%"}}>
                <Form schema={schema}
                formData={this.state.formData}
                onChange={this.handleChange}
                onSubmit={this.download}
                onError={log("errors")}
                />
                </div>
            </Paper></Box></div>
            <div style={{width: "40%", display: "inline-block"}}><Box border={4} borderTop={2} m={0.5} marginTop={0} paddingLeft={1} paddingBottom={0.5}><Paper style={{height: 800, overflow: 'auto'}}>
            <div style={{width: "99%", height: "99%"}}>
                <pre>{JSON.stringify(this.state.formData, null, 4)}</pre>
                <button onClick={this.download} s>
                    Download this file
                </button>
                
                <a className="hidden"
                    download={this.fileNames[this.state.fileType]}
                    href={this.state.fileDownloadUrl}
                    ref={e=>this.dofileDownload = e}
                >
                </a>
                <p>(The downloaded file might contain errors. Better download the file by clicking Submit button.)</p>
                <br></br>
            </div>
            </Paper></Box></div>
        </div>
      )
    }
  }

render(<App />, document.getElementById("root"));
