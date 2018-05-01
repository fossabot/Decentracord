module.exports = {Address: 0x0adc3524084c57ad0a1f45ed33a31bde42cae027, ABI: {
	"contractName": "Decentracord",
	"abi": [
		{
			"constant": true,
			"inputs": [],
			"name": "dataStore",
			"outputs": [
				{
					"name": "",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"name": "storageAddress",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "nick",
					"type": "string"
				}
			],
			"name": "newUser",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		}
	],
	"bytecode": "0x608060405234801561001057600080fd5b5060405160208061030583398101806040528101908080519060200190929190505050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610282806100836000396000f30060806040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631eed119214610051578063660d0d671461008c575b600080fd5b34801561005d57600080fd5b5061008a6004803603810190808035906020019082018035906020019190919293919293905050506100e3565b005b34801561009857600080fd5b506100a1610231565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636e8995503360405180807f757365722e6e69636b00000000000000000000000000000000000000000000008152506009018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000028152601401915050604051809103902084846040518463ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018084600019166000191681526020018060200182810382528484828181526020019250808284378201915050945050505050600060405180830381600087803b15801561021557600080fd5b505af1158015610229573d6000803e3d6000fd5b505050505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16815600a165627a7a723058202b16c254b3c60acc4aefbea6920209f4c2874aa3cc15d8d6fe4b5fd44eba943b0029",
	"deployedBytecode": "0x60806040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631eed119214610051578063660d0d671461008c575b600080fd5b34801561005d57600080fd5b5061008a6004803603810190808035906020019082018035906020019190919293919293905050506100e3565b005b34801561009857600080fd5b506100a1610231565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636e8995503360405180807f757365722e6e69636b00000000000000000000000000000000000000000000008152506009018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000028152601401915050604051809103902084846040518463ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018084600019166000191681526020018060200182810382528484828181526020019250808284378201915050945050505050600060405180830381600087803b15801561021557600080fd5b505af1158015610229573d6000803e3d6000fd5b505050505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16815600a165627a7a723058202b16c254b3c60acc4aefbea6920209f4c2874aa3cc15d8d6fe4b5fd44eba943b0029",
	"sourceMap": "55:269:0:-;;;114:88;8:9:-1;5:2;;;30:1;27;20:12;5:2;114:88:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;182:14;162:9;;:35;;;;;;;;;;;;;;;;;;114:88;55:269;;;;;;",
	"deployedSourceMap": "55:269:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;208:110;;8:9:-1;5:2;;;30:1;27;20:12;5:2;208:110:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;84:24;;8:9:-1;5:2;;;30:1;27;20:12;5:2;84:24:0;;;;;;;;;;;;;;;;;;;;;;;;;;;208:110;252:9;;;;;;;;;;;:19;;;295:10;272:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;308:4;;252:61;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;252:61:0;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;252:61:0;;;;208:110;;:::o;84:24::-;;;;;;;;;;;;;:::o",
	"source": "pragma solidity ^0.4.23;\r\n\r\nimport \"./Storage.sol\";\r\n\r\ncontract Decentracord {\r\n\t\r\n\tStorage public dataStore;\r\n\r\n\tconstructor(address storageAddress) public {\r\n\t\tdataStore = Storage(storageAddress);\r\n\t}\r\n\t\r\n\tfunction newUser(string nick) external {\r\n\t\tdataStore.setString(keccak256(\"user.nick\", msg.sender), nick);\r\n\t}\r\n\t\r\n}\r\n",
	"sourcePath": "d:\\Programy\\Deweloping\\Projekty\\js\\Decentracord\\contracts\\Decentracord.sol",
	"ast": {
		"absolutePath": "/d/Programy/Deweloping/Projekty/js/Decentracord/contracts/Decentracord.sol",
		"exportedSymbols": {
			"Decentracord": [
				34
			]
		},
		"id": 35,
		"nodeType": "SourceUnit",
		"nodes": [
			{
				"id": 1,
				"literals": [
					"solidity",
					"^",
					"0.4",
					".23"
				],
				"nodeType": "PragmaDirective",
				"src": "0:24:0"
			},
			{
				"absolutePath": "/d/Programy/Deweloping/Projekty/js/Decentracord/contracts/Storage.sol",
				"file": "./Storage.sol",
				"id": 2,
				"nodeType": "ImportDirective",
				"scope": 35,
				"sourceUnit": 445,
				"src": "28:23:0",
				"symbolAliases": [],
				"unitAlias": ""
			},
			{
				"baseContracts": [],
				"contractDependencies": [],
				"contractKind": "contract",
				"documentation": null,
				"fullyImplemented": true,
				"id": 34,
				"linearizedBaseContracts": [
					34
				],
				"name": "Decentracord",
				"nodeType": "ContractDefinition",
				"nodes": [
					{
						"constant": false,
						"id": 4,
						"name": "dataStore",
						"nodeType": "VariableDeclaration",
						"scope": 34,
						"src": "84:24:0",
						"stateVariable": true,
						"storageLocation": "default",
						"typeDescriptions": {
							"typeIdentifier": "t_contract$_Storage_$444",
							"typeString": "contract Storage"
						},
						"typeName": {
							"contractScope": null,
							"id": 3,
							"name": "Storage",
							"nodeType": "UserDefinedTypeName",
							"referencedDeclaration": 444,
							"src": "84:7:0",
							"typeDescriptions": {
								"typeIdentifier": "t_contract$_Storage_$444",
								"typeString": "contract Storage"
							}
						},
						"value": null,
						"visibility": "public"
					},
					{
						"body": {
							"id": 15,
							"nodeType": "Block",
							"src": "157:45:0",
							"statements": [
								{
									"expression": {
										"argumentTypes": null,
										"id": 13,
										"isConstant": false,
										"isLValue": false,
										"isPure": false,
										"lValueRequested": false,
										"leftHandSide": {
											"argumentTypes": null,
											"id": 9,
											"name": "dataStore",
											"nodeType": "Identifier",
											"overloadedDeclarations": [],
											"referencedDeclaration": 4,
											"src": "162:9:0",
											"typeDescriptions": {
												"typeIdentifier": "t_contract$_Storage_$444",
												"typeString": "contract Storage"
											}
										},
										"nodeType": "Assignment",
										"operator": "=",
										"rightHandSide": {
											"argumentTypes": null,
											"arguments": [
												{
													"argumentTypes": null,
													"id": 11,
													"name": "storageAddress",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 6,
													"src": "182:14:0",
													"typeDescriptions": {
														"typeIdentifier": "t_address",
														"typeString": "address"
													}
												}
											],
											"expression": {
												"argumentTypes": [
													{
														"typeIdentifier": "t_address",
														"typeString": "address"
													}
												],
												"id": 10,
												"name": "Storage",
												"nodeType": "Identifier",
												"overloadedDeclarations": [],
												"referencedDeclaration": 444,
												"src": "174:7:0",
												"typeDescriptions": {
													"typeIdentifier": "t_type$_t_contract$_Storage_$444_$",
													"typeString": "type(contract Storage)"
												}
											},
											"id": 12,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"kind": "typeConversion",
											"lValueRequested": false,
											"names": [],
											"nodeType": "FunctionCall",
											"src": "174:23:0",
											"typeDescriptions": {
												"typeIdentifier": "t_contract$_Storage_$444",
												"typeString": "contract Storage"
											}
										},
										"src": "162:35:0",
										"typeDescriptions": {
											"typeIdentifier": "t_contract$_Storage_$444",
											"typeString": "contract Storage"
										}
									},
									"id": 14,
									"nodeType": "ExpressionStatement",
									"src": "162:35:0"
								}
							]
						},
						"documentation": null,
						"id": 16,
						"implemented": true,
						"isConstructor": true,
						"isDeclaredConst": false,
						"modifiers": [],
						"name": "",
						"nodeType": "FunctionDefinition",
						"parameters": {
							"id": 7,
							"nodeType": "ParameterList",
							"parameters": [
								{
									"constant": false,
									"id": 6,
									"name": "storageAddress",
									"nodeType": "VariableDeclaration",
									"scope": 16,
									"src": "126:22:0",
									"stateVariable": false,
									"storageLocation": "default",
									"typeDescriptions": {
										"typeIdentifier": "t_address",
										"typeString": "address"
									},
									"typeName": {
										"id": 5,
										"name": "address",
										"nodeType": "ElementaryTypeName",
										"src": "126:7:0",
										"typeDescriptions": {
											"typeIdentifier": "t_address",
											"typeString": "address"
										}
									},
									"value": null,
									"visibility": "internal"
								}
							],
							"src": "125:24:0"
						},
						"payable": false,
						"returnParameters": {
							"id": 8,
							"nodeType": "ParameterList",
							"parameters": [],
							"src": "157:0:0"
						},
						"scope": 34,
						"src": "114:88:0",
						"stateMutability": "nonpayable",
						"superFunction": null,
						"visibility": "public"
					},
					{
						"body": {
							"id": 32,
							"nodeType": "Block",
							"src": "247:71:0",
							"statements": [
								{
									"expression": {
										"argumentTypes": null,
										"arguments": [
											{
												"argumentTypes": null,
												"arguments": [
													{
														"argumentTypes": null,
														"hexValue": "757365722e6e69636b",
														"id": 25,
														"isConstant": false,
														"isLValue": false,
														"isPure": true,
														"kind": "string",
														"lValueRequested": false,
														"nodeType": "Literal",
														"src": "282:11:0",
														"subdenomination": null,
														"typeDescriptions": {
															"typeIdentifier": "t_stringliteral_df73a89344db590ae48afbd800a4a2684a03a38012daa653ff17d0483049b0c3",
															"typeString": "literal_string \"user.nick\""
														},
														"value": "user.nick"
													},
													{
														"argumentTypes": null,
														"expression": {
															"argumentTypes": null,
															"id": 26,
															"name": "msg",
															"nodeType": "Identifier",
															"overloadedDeclarations": [],
															"referencedDeclaration": 459,
															"src": "295:3:0",
															"typeDescriptions": {
																"typeIdentifier": "t_magic_message",
																"typeString": "msg"
															}
														},
														"id": 27,
														"isConstant": false,
														"isLValue": false,
														"isPure": false,
														"lValueRequested": false,
														"memberName": "sender",
														"nodeType": "MemberAccess",
														"referencedDeclaration": null,
														"src": "295:10:0",
														"typeDescriptions": {
															"typeIdentifier": "t_address",
															"typeString": "address"
														}
													}
												],
												"expression": {
													"argumentTypes": [
														{
															"typeIdentifier": "t_stringliteral_df73a89344db590ae48afbd800a4a2684a03a38012daa653ff17d0483049b0c3",
															"typeString": "literal_string \"user.nick\""
														},
														{
															"typeIdentifier": "t_address",
															"typeString": "address"
														}
													],
													"id": 24,
													"name": "keccak256",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 453,
													"src": "272:9:0",
													"typeDescriptions": {
														"typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
														"typeString": "function () pure returns (bytes32)"
													}
												},
												"id": 28,
												"isConstant": false,
												"isLValue": false,
												"isPure": false,
												"kind": "functionCall",
												"lValueRequested": false,
												"names": [],
												"nodeType": "FunctionCall",
												"src": "272:34:0",
												"typeDescriptions": {
													"typeIdentifier": "t_bytes32",
													"typeString": "bytes32"
												}
											},
											{
												"argumentTypes": null,
												"id": 29,
												"name": "nick",
												"nodeType": "Identifier",
												"overloadedDeclarations": [],
												"referencedDeclaration": 18,
												"src": "308:4:0",
												"typeDescriptions": {
													"typeIdentifier": "t_string_calldata_ptr",
													"typeString": "string calldata"
												}
											}
										],
										"expression": {
											"argumentTypes": [
												{
													"typeIdentifier": "t_bytes32",
													"typeString": "bytes32"
												},
												{
													"typeIdentifier": "t_string_calldata_ptr",
													"typeString": "string calldata"
												}
											],
											"expression": {
												"argumentTypes": null,
												"id": 21,
												"name": "dataStore",
												"nodeType": "Identifier",
												"overloadedDeclarations": [],
												"referencedDeclaration": 4,
												"src": "252:9:0",
												"typeDescriptions": {
													"typeIdentifier": "t_contract$_Storage_$444",
													"typeString": "contract Storage"
												}
											},
											"id": 23,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"lValueRequested": false,
											"memberName": "setString",
											"nodeType": "MemberAccess",
											"referencedDeclaration": 317,
											"src": "252:19:0",
											"typeDescriptions": {
												"typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_string_memory_ptr_$returns$__$",
												"typeString": "function (bytes32,string memory) external"
											}
										},
										"id": 30,
										"isConstant": false,
										"isLValue": false,
										"isPure": false,
										"kind": "functionCall",
										"lValueRequested": false,
										"names": [],
										"nodeType": "FunctionCall",
										"src": "252:61:0",
										"typeDescriptions": {
											"typeIdentifier": "t_tuple$__$",
											"typeString": "tuple()"
										}
									},
									"id": 31,
									"nodeType": "ExpressionStatement",
									"src": "252:61:0"
								}
							]
						},
						"documentation": null,
						"id": 33,
						"implemented": true,
						"isConstructor": false,
						"isDeclaredConst": false,
						"modifiers": [],
						"name": "newUser",
						"nodeType": "FunctionDefinition",
						"parameters": {
							"id": 19,
							"nodeType": "ParameterList",
							"parameters": [
								{
									"constant": false,
									"id": 18,
									"name": "nick",
									"nodeType": "VariableDeclaration",
									"scope": 33,
									"src": "225:11:0",
									"stateVariable": false,
									"storageLocation": "default",
									"typeDescriptions": {
										"typeIdentifier": "t_string_calldata_ptr",
										"typeString": "string"
									},
									"typeName": {
										"id": 17,
										"name": "string",
										"nodeType": "ElementaryTypeName",
										"src": "225:6:0",
										"typeDescriptions": {
											"typeIdentifier": "t_string_storage_ptr",
											"typeString": "string"
										}
									},
									"value": null,
									"visibility": "internal"
								}
							],
							"src": "224:13:0"
						},
						"payable": false,
						"returnParameters": {
							"id": 20,
							"nodeType": "ParameterList",
							"parameters": [],
							"src": "247:0:0"
						},
						"scope": 34,
						"src": "208:110:0",
						"stateMutability": "nonpayable",
						"superFunction": null,
						"visibility": "external"
					}
				],
				"scope": 35,
				"src": "55:269:0"
			}
		],
		"src": "0:326:0"
	},
	"legacyAST": {
		"absolutePath": "/d/Programy/Deweloping/Projekty/js/Decentracord/contracts/Decentracord.sol",
		"exportedSymbols": {
			"Decentracord": [
				34
			]
		},
		"id": 35,
		"nodeType": "SourceUnit",
		"nodes": [
			{
				"id": 1,
				"literals": [
					"solidity",
					"^",
					"0.4",
					".23"
				],
				"nodeType": "PragmaDirective",
				"src": "0:24:0"
			},
			{
				"absolutePath": "/d/Programy/Deweloping/Projekty/js/Decentracord/contracts/Storage.sol",
				"file": "./Storage.sol",
				"id": 2,
				"nodeType": "ImportDirective",
				"scope": 35,
				"sourceUnit": 445,
				"src": "28:23:0",
				"symbolAliases": [],
				"unitAlias": ""
			},
			{
				"baseContracts": [],
				"contractDependencies": [],
				"contractKind": "contract",
				"documentation": null,
				"fullyImplemented": true,
				"id": 34,
				"linearizedBaseContracts": [
					34
				],
				"name": "Decentracord",
				"nodeType": "ContractDefinition",
				"nodes": [
					{
						"constant": false,
						"id": 4,
						"name": "dataStore",
						"nodeType": "VariableDeclaration",
						"scope": 34,
						"src": "84:24:0",
						"stateVariable": true,
						"storageLocation": "default",
						"typeDescriptions": {
							"typeIdentifier": "t_contract$_Storage_$444",
							"typeString": "contract Storage"
						},
						"typeName": {
							"contractScope": null,
							"id": 3,
							"name": "Storage",
							"nodeType": "UserDefinedTypeName",
							"referencedDeclaration": 444,
							"src": "84:7:0",
							"typeDescriptions": {
								"typeIdentifier": "t_contract$_Storage_$444",
								"typeString": "contract Storage"
							}
						},
						"value": null,
						"visibility": "public"
					},
					{
						"body": {
							"id": 15,
							"nodeType": "Block",
							"src": "157:45:0",
							"statements": [
								{
									"expression": {
										"argumentTypes": null,
										"id": 13,
										"isConstant": false,
										"isLValue": false,
										"isPure": false,
										"lValueRequested": false,
										"leftHandSide": {
											"argumentTypes": null,
											"id": 9,
											"name": "dataStore",
											"nodeType": "Identifier",
											"overloadedDeclarations": [],
											"referencedDeclaration": 4,
											"src": "162:9:0",
											"typeDescriptions": {
												"typeIdentifier": "t_contract$_Storage_$444",
												"typeString": "contract Storage"
											}
										},
										"nodeType": "Assignment",
										"operator": "=",
										"rightHandSide": {
											"argumentTypes": null,
											"arguments": [
												{
													"argumentTypes": null,
													"id": 11,
													"name": "storageAddress",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 6,
													"src": "182:14:0",
													"typeDescriptions": {
														"typeIdentifier": "t_address",
														"typeString": "address"
													}
												}
											],
											"expression": {
												"argumentTypes": [
													{
														"typeIdentifier": "t_address",
														"typeString": "address"
													}
												],
												"id": 10,
												"name": "Storage",
												"nodeType": "Identifier",
												"overloadedDeclarations": [],
												"referencedDeclaration": 444,
												"src": "174:7:0",
												"typeDescriptions": {
													"typeIdentifier": "t_type$_t_contract$_Storage_$444_$",
													"typeString": "type(contract Storage)"
												}
											},
											"id": 12,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"kind": "typeConversion",
											"lValueRequested": false,
											"names": [],
											"nodeType": "FunctionCall",
											"src": "174:23:0",
											"typeDescriptions": {
												"typeIdentifier": "t_contract$_Storage_$444",
												"typeString": "contract Storage"
											}
										},
										"src": "162:35:0",
										"typeDescriptions": {
											"typeIdentifier": "t_contract$_Storage_$444",
											"typeString": "contract Storage"
										}
									},
									"id": 14,
									"nodeType": "ExpressionStatement",
									"src": "162:35:0"
								}
							]
						},
						"documentation": null,
						"id": 16,
						"implemented": true,
						"isConstructor": true,
						"isDeclaredConst": false,
						"modifiers": [],
						"name": "",
						"nodeType": "FunctionDefinition",
						"parameters": {
							"id": 7,
							"nodeType": "ParameterList",
							"parameters": [
								{
									"constant": false,
									"id": 6,
									"name": "storageAddress",
									"nodeType": "VariableDeclaration",
									"scope": 16,
									"src": "126:22:0",
									"stateVariable": false,
									"storageLocation": "default",
									"typeDescriptions": {
										"typeIdentifier": "t_address",
										"typeString": "address"
									},
									"typeName": {
										"id": 5,
										"name": "address",
										"nodeType": "ElementaryTypeName",
										"src": "126:7:0",
										"typeDescriptions": {
											"typeIdentifier": "t_address",
											"typeString": "address"
										}
									},
									"value": null,
									"visibility": "internal"
								}
							],
							"src": "125:24:0"
						},
						"payable": false,
						"returnParameters": {
							"id": 8,
							"nodeType": "ParameterList",
							"parameters": [],
							"src": "157:0:0"
						},
						"scope": 34,
						"src": "114:88:0",
						"stateMutability": "nonpayable",
						"superFunction": null,
						"visibility": "public"
					},
					{
						"body": {
							"id": 32,
							"nodeType": "Block",
							"src": "247:71:0",
							"statements": [
								{
									"expression": {
										"argumentTypes": null,
										"arguments": [
											{
												"argumentTypes": null,
												"arguments": [
													{
														"argumentTypes": null,
														"hexValue": "757365722e6e69636b",
														"id": 25,
														"isConstant": false,
														"isLValue": false,
														"isPure": true,
														"kind": "string",
														"lValueRequested": false,
														"nodeType": "Literal",
														"src": "282:11:0",
														"subdenomination": null,
														"typeDescriptions": {
															"typeIdentifier": "t_stringliteral_df73a89344db590ae48afbd800a4a2684a03a38012daa653ff17d0483049b0c3",
															"typeString": "literal_string \"user.nick\""
														},
														"value": "user.nick"
													},
													{
														"argumentTypes": null,
														"expression": {
															"argumentTypes": null,
															"id": 26,
															"name": "msg",
															"nodeType": "Identifier",
															"overloadedDeclarations": [],
															"referencedDeclaration": 459,
															"src": "295:3:0",
															"typeDescriptions": {
																"typeIdentifier": "t_magic_message",
																"typeString": "msg"
															}
														},
														"id": 27,
														"isConstant": false,
														"isLValue": false,
														"isPure": false,
														"lValueRequested": false,
														"memberName": "sender",
														"nodeType": "MemberAccess",
														"referencedDeclaration": null,
														"src": "295:10:0",
														"typeDescriptions": {
															"typeIdentifier": "t_address",
															"typeString": "address"
														}
													}
												],
												"expression": {
													"argumentTypes": [
														{
															"typeIdentifier": "t_stringliteral_df73a89344db590ae48afbd800a4a2684a03a38012daa653ff17d0483049b0c3",
															"typeString": "literal_string \"user.nick\""
														},
														{
															"typeIdentifier": "t_address",
															"typeString": "address"
														}
													],
													"id": 24,
													"name": "keccak256",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 453,
													"src": "272:9:0",
													"typeDescriptions": {
														"typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
														"typeString": "function () pure returns (bytes32)"
													}
												},
												"id": 28,
												"isConstant": false,
												"isLValue": false,
												"isPure": false,
												"kind": "functionCall",
												"lValueRequested": false,
												"names": [],
												"nodeType": "FunctionCall",
												"src": "272:34:0",
												"typeDescriptions": {
													"typeIdentifier": "t_bytes32",
													"typeString": "bytes32"
												}
											},
											{
												"argumentTypes": null,
												"id": 29,
												"name": "nick",
												"nodeType": "Identifier",
												"overloadedDeclarations": [],
												"referencedDeclaration": 18,
												"src": "308:4:0",
												"typeDescriptions": {
													"typeIdentifier": "t_string_calldata_ptr",
													"typeString": "string calldata"
												}
											}
										],
										"expression": {
											"argumentTypes": [
												{
													"typeIdentifier": "t_bytes32",
													"typeString": "bytes32"
												},
												{
													"typeIdentifier": "t_string_calldata_ptr",
													"typeString": "string calldata"
												}
											],
											"expression": {
												"argumentTypes": null,
												"id": 21,
												"name": "dataStore",
												"nodeType": "Identifier",
												"overloadedDeclarations": [],
												"referencedDeclaration": 4,
												"src": "252:9:0",
												"typeDescriptions": {
													"typeIdentifier": "t_contract$_Storage_$444",
													"typeString": "contract Storage"
												}
											},
											"id": 23,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"lValueRequested": false,
											"memberName": "setString",
											"nodeType": "MemberAccess",
											"referencedDeclaration": 317,
											"src": "252:19:0",
											"typeDescriptions": {
												"typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_string_memory_ptr_$returns$__$",
												"typeString": "function (bytes32,string memory) external"
											}
										},
										"id": 30,
										"isConstant": false,
										"isLValue": false,
										"isPure": false,
										"kind": "functionCall",
										"lValueRequested": false,
										"names": [],
										"nodeType": "FunctionCall",
										"src": "252:61:0",
										"typeDescriptions": {
											"typeIdentifier": "t_tuple$__$",
											"typeString": "tuple()"
										}
									},
									"id": 31,
									"nodeType": "ExpressionStatement",
									"src": "252:61:0"
								}
							]
						},
						"documentation": null,
						"id": 33,
						"implemented": true,
						"isConstructor": false,
						"isDeclaredConst": false,
						"modifiers": [],
						"name": "newUser",
						"nodeType": "FunctionDefinition",
						"parameters": {
							"id": 19,
							"nodeType": "ParameterList",
							"parameters": [
								{
									"constant": false,
									"id": 18,
									"name": "nick",
									"nodeType": "VariableDeclaration",
									"scope": 33,
									"src": "225:11:0",
									"stateVariable": false,
									"storageLocation": "default",
									"typeDescriptions": {
										"typeIdentifier": "t_string_calldata_ptr",
										"typeString": "string"
									},
									"typeName": {
										"id": 17,
										"name": "string",
										"nodeType": "ElementaryTypeName",
										"src": "225:6:0",
										"typeDescriptions": {
											"typeIdentifier": "t_string_storage_ptr",
											"typeString": "string"
										}
									},
									"value": null,
									"visibility": "internal"
								}
							],
							"src": "224:13:0"
						},
						"payable": false,
						"returnParameters": {
							"id": 20,
							"nodeType": "ParameterList",
							"parameters": [],
							"src": "247:0:0"
						},
						"scope": 34,
						"src": "208:110:0",
						"stateMutability": "nonpayable",
						"superFunction": null,
						"visibility": "external"
					}
				],
				"scope": 35,
				"src": "55:269:0"
			}
		],
		"src": "0:326:0"
	},
	"compiler": {
		"name": "solc",
		"version": "0.4.23+commit.124ca40d.Emscripten.clang"
	},
	"networks": {
		"5777": {
			"events": {},
			"links": {},
			"address": "0x8628888ffe687cc1f1f2d5314967045f1f6d1b8f",
			"transactionHash": "0xd0e2ed5caf0733f7ead62c00800f8f7f7037d5a3c88657765450370a3c7c50ea"
		}
	},
	"schemaVersion": "2.0.0",
	"updatedAt": "2018-04-30T23:30:49.398Z"
}};