// Generated from Aql.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class AqlLexer extends Lexer {
	public static readonly SELECT = 1;
	public static readonly FROM = 2;
	public static readonly SINCE = 3;
	public static readonly UNTIL = 4;
	public static readonly AT = 5;
	public static readonly WHERE = 6;
	public static readonly LAST = 7;
	public static readonly AGO = 8;
	public static readonly IN = 9;
	public static readonly TRUE = 10;
	public static readonly FALSE = 11;
	public static readonly TODAY = 12;
	public static readonly YESTERDAY = 13;
	public static readonly MONDAY = 14;
	public static readonly TUESDAY = 15;
	public static readonly WEDNESDAY = 16;
	public static readonly THURSDAY = 17;
	public static readonly FRIDAY = 18;
	public static readonly SATURDAY = 19;
	public static readonly SUNDAY = 20;
	public static readonly MINUTES = 21;
	public static readonly HOURS = 22;
	public static readonly DAYS = 23;
	public static readonly WEEKS = 24;
	public static readonly MONTHS = 25;
	public static readonly COUNT = 26;
	public static readonly MAX = 27;
	public static readonly MIN = 28;
	public static readonly ABS = 29;
	public static readonly SUM = 30;
	public static readonly AVG = 31;
	public static readonly TIMESERIES = 32;
	public static readonly EVERY = 33;
	public static readonly FACET = 34;
	public static readonly AND = 35;
	public static readonly OR = 36;
	public static readonly IDENTIFIER = 37;
	public static readonly INT = 38;
	public static readonly STRING = 39;
	public static readonly OPEN_PAREN = 40;
	public static readonly CLOSE_PAREN = 41;
	public static readonly STAR = 42;
	public static readonly DIVIDE = 43;
	public static readonly PLUS = 44;
	public static readonly MINUS = 45;
	public static readonly EQUAL = 46;
	public static readonly NOT_EQUAL = 47;
	public static readonly GREATER_THAN = 48;
	public static readonly GREATER_THAN_EQUALS = 49;
	public static readonly LESS_THAN = 50;
	public static readonly LESS_THAN_EQUALS = 51;
	public static readonly COMMA = 52;
	public static readonly COMMENT = 53;
	public static readonly WS = 54;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"SELECT", "FROM", "SINCE", "UNTIL", "AT", "WHERE", "LAST", "AGO", "IN", 
		"TRUE", "FALSE", "TODAY", "YESTERDAY", "MONDAY", "TUESDAY", "WEDNESDAY", 
		"THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY", "MINUTES", "HOURS", "DAYS", 
		"WEEKS", "MONTHS", "COUNT", "MAX", "MIN", "ABS", "SUM", "AVG", "TIMESERIES", 
		"EVERY", "FACET", "AND", "OR", "IDENTIFIER", "INT", "STRING", "OPEN_PAREN", 
		"CLOSE_PAREN", "STAR", "DIVIDE", "PLUS", "MINUS", "EQUAL", "NOT_EQUAL", 
		"GREATER_THAN", "GREATER_THAN_EQUALS", "LESS_THAN", "LESS_THAN_EQUALS", 
		"COMMA", "COMMENT", "WS", "A", "B", "C", "D", "E", "F", "G", "H", "I", 
		"J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", 
		"X", "Y", "Z",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "'true'", "'false'", undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "'('", "')'", "'*'", 
		"'/'", "'+'", "'-'", "'='", "'!='", "'>'", "'>='", "'<'", "'<='", "','",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "SELECT", "FROM", "SINCE", "UNTIL", "AT", "WHERE", "LAST", 
		"AGO", "IN", "TRUE", "FALSE", "TODAY", "YESTERDAY", "MONDAY", "TUESDAY", 
		"WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY", "MINUTES", "HOURS", 
		"DAYS", "WEEKS", "MONTHS", "COUNT", "MAX", "MIN", "ABS", "SUM", "AVG", 
		"TIMESERIES", "EVERY", "FACET", "AND", "OR", "IDENTIFIER", "INT", "STRING", 
		"OPEN_PAREN", "CLOSE_PAREN", "STAR", "DIVIDE", "PLUS", "MINUS", "EQUAL", 
		"NOT_EQUAL", "GREATER_THAN", "GREATER_THAN_EQUALS", "LESS_THAN", "LESS_THAN_EQUALS", 
		"COMMA", "COMMENT", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(AqlLexer._LITERAL_NAMES, AqlLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return AqlLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(AqlLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "Aql.g4"; }

	// @Override
	public get ruleNames(): string[] { return AqlLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return AqlLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return AqlLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return AqlLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x028\u01F6\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03" +
		"\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03" +
		"\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u012C\n\x16\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u0133\n\x17\x03\x18\x03\x18\x03" +
		"\x18\x03\x18\x05\x18\u0139\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
		"\x05\x19\u0140\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05" +
		"\x1A\u0148\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C" +
		"\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03" +
		"!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03\"\x03\"\x03\"" +
		"\x03\"\x03\"\x03\"\x03#\x03#\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x03" +
		"%\x03%\x03%\x03&\x03&\x07&\u0184\n&\f&\x0E&\u0187\v&\x03\'\x06\'\u018A" +
		"\n\'\r\'\x0E\'\u018B\x03(\x03(\x07(\u0190\n(\f(\x0E(\u0193\v(\x03(\x03" +
		"(\x03)\x03)\x03*\x03*\x03+\x03+\x03,\x03,\x03-\x03-\x03.\x03.\x03/\x03" +
		"/\x030\x030\x030\x031\x031\x032\x032\x032\x033\x033\x034\x034\x034\x03" +
		"5\x035\x036\x036\x036\x036\x076\u01B8\n6\f6\x0E6\u01BB\v6\x036\x036\x03" +
		"7\x037\x037\x037\x038\x038\x039\x039\x03:\x03:\x03;\x03;\x03<\x03<\x03" +
		"=\x03=\x03>\x03>\x03?\x03?\x03@\x03@\x03A\x03A\x03B\x03B\x03C\x03C\x03" +
		"D\x03D\x03E\x03E\x03F\x03F\x03G\x03G\x03H\x03H\x03I\x03I\x03J\x03J\x03" +
		"K\x03K\x03L\x03L\x03M\x03M\x03N\x03N\x03O\x03O\x03P\x03P\x03Q\x03Q\x02" +
		"\x02\x02R\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02" +
		"\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02" +
		"\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02" +
		"\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02" +
		"\x1E;\x02\x1F=\x02 ?\x02!A\x02\"C\x02#E\x02$G\x02%I\x02&K\x02\'M\x02(" +
		"O\x02)Q\x02*S\x02+U\x02,W\x02-Y\x02.[\x02/]\x020_\x021a\x022c\x023e\x02" +
		"4g\x025i\x026k\x027m\x028o\x02\x02q\x02\x02s\x02\x02u\x02\x02w\x02\x02" +
		"y\x02\x02{\x02\x02}\x02\x02\x7F\x02\x02\x81\x02\x02\x83\x02\x02\x85\x02" +
		"\x02\x87\x02\x02\x89\x02\x02\x8B\x02\x02\x8D\x02\x02\x8F\x02\x02\x91\x02" +
		"\x02\x93\x02\x02\x95\x02\x02\x97\x02\x02\x99\x02\x02\x9B\x02\x02\x9D\x02" +
		"\x02\x9F\x02\x02\xA1\x02\x02\x03\x02\"\x04\x02C\\c|\x06\x022;C\\aac|\x03" +
		"\x022;\x05\x02\f\f\x0F\x0F))\x04\x02\f\f\x0F\x0F\x04\x02\v\f\"\"\x04\x02" +
		"CCcc\x04\x02DDdd\x04\x02EEee\x04\x02FFff\x04\x02GGgg\x04\x02HHhh\x04\x02" +
		"IIii\x04\x02JJjj\x04\x02KKkk\x04\x02LLll\x04\x02MMmm\x04\x02NNnn\x04\x02" +
		"OOoo\x04\x02PPpp\x04\x02QQqq\x04\x02RRrr\x04\x02SSss\x04\x02TTtt\x04\x02" +
		"UUuu\x04\x02VVvv\x04\x02WWww\x04\x02XXxx\x04\x02YYyy\x04\x02ZZzz\x04\x02" +
		"[[{{\x04\x02\\\\||\x02\u01E4\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02" +
		"\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02" +
		"\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02" +
		"\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02" +
		"\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02" +
		"\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02" +
		"%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03" +
		"\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02" +
		"\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02\x02" +
		"9\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02?\x03\x02" +
		"\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02\x02\x02E\x03\x02\x02\x02" +
		"\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02K\x03\x02\x02\x02\x02M\x03" +
		"\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02\x02\x02\x02S\x03\x02\x02" +
		"\x02\x02U\x03\x02\x02\x02\x02W\x03\x02\x02\x02\x02Y\x03\x02\x02\x02\x02" +
		"[\x03\x02\x02\x02\x02]\x03\x02\x02\x02\x02_\x03\x02\x02\x02\x02a\x03\x02" +
		"\x02\x02\x02c\x03\x02\x02\x02\x02e\x03\x02\x02\x02\x02g\x03\x02\x02\x02" +
		"\x02i\x03\x02\x02\x02\x02k\x03\x02\x02\x02\x02m\x03\x02\x02\x02\x03\xA3" +
		"\x03\x02\x02\x02\x05\xAA\x03\x02\x02\x02\x07\xAF\x03\x02\x02\x02\t\xB5" +
		"\x03\x02\x02\x02\v\xBB\x03\x02\x02\x02\r\xBE\x03\x02\x02\x02\x0F\xC4\x03" +
		"\x02\x02\x02\x11\xC9\x03\x02\x02\x02\x13\xCD\x03\x02\x02\x02\x15\xD0\x03" +
		"\x02\x02\x02\x17\xD5\x03\x02\x02\x02\x19\xDB\x03\x02\x02\x02\x1B\xE1\x03" +
		"\x02\x02\x02\x1D\xEB\x03\x02\x02\x02\x1F\xF2\x03\x02\x02\x02!\xFA\x03" +
		"\x02\x02\x02#\u0104\x03\x02\x02\x02%\u010D\x03\x02\x02\x02\'\u0114\x03" +
		"\x02\x02\x02)\u011D\x03\x02\x02\x02+\u0124\x03\x02\x02\x02-\u012D\x03" +
		"\x02\x02\x02/\u0134\x03\x02\x02\x021\u013A\x03\x02\x02\x023\u0141\x03" +
		"\x02\x02\x025\u0149\x03\x02\x02\x027\u014F\x03\x02\x02\x029\u0153\x03" +
		"\x02\x02\x02;\u0157\x03\x02\x02\x02=\u015B\x03\x02\x02\x02?\u015F\x03" +
		"\x02\x02\x02A\u0163\x03\x02\x02\x02C\u016E\x03\x02\x02\x02E\u0174\x03" +
		"\x02\x02\x02G\u017A\x03\x02\x02\x02I\u017E\x03\x02\x02\x02K\u0181\x03" +
		"\x02\x02\x02M\u0189\x03\x02\x02\x02O\u018D\x03\x02\x02\x02Q\u0196\x03" +
		"\x02\x02\x02S\u0198\x03\x02\x02\x02U\u019A\x03\x02\x02\x02W\u019C\x03" +
		"\x02\x02\x02Y\u019E\x03\x02\x02\x02[\u01A0\x03\x02\x02\x02]\u01A2\x03" +
		"\x02\x02\x02_\u01A4\x03\x02\x02\x02a\u01A7\x03\x02\x02\x02c\u01A9\x03" +
		"\x02\x02\x02e\u01AC\x03\x02\x02\x02g\u01AE\x03\x02\x02\x02i\u01B1\x03" +
		"\x02\x02\x02k\u01B3\x03\x02\x02\x02m\u01BE\x03\x02\x02\x02o\u01C2\x03" +
		"\x02\x02\x02q\u01C4\x03\x02\x02\x02s\u01C6\x03\x02\x02\x02u\u01C8\x03" +
		"\x02\x02\x02w\u01CA\x03\x02\x02\x02y\u01CC\x03\x02\x02\x02{\u01CE\x03" +
		"\x02\x02\x02}\u01D0\x03\x02\x02\x02\x7F\u01D2\x03\x02\x02\x02\x81\u01D4" +
		"\x03\x02\x02\x02\x83\u01D6\x03\x02\x02\x02\x85\u01D8\x03\x02\x02\x02\x87" +
		"\u01DA\x03\x02\x02\x02\x89\u01DC\x03\x02\x02\x02\x8B\u01DE\x03\x02\x02" +
		"\x02\x8D\u01E0\x03\x02\x02\x02\x8F\u01E2\x03\x02\x02\x02\x91\u01E4\x03" +
		"\x02\x02\x02\x93\u01E6\x03\x02\x02\x02\x95\u01E8\x03\x02\x02\x02\x97\u01EA" +
		"\x03\x02\x02\x02\x99\u01EC\x03\x02\x02\x02\x9B\u01EE\x03\x02\x02\x02\x9D" +
		"\u01F0\x03\x02\x02\x02\x9F\u01F2\x03\x02\x02\x02\xA1\u01F4\x03\x02\x02" +
		"\x02\xA3\xA4\x05\x93J\x02\xA4\xA5\x05w<\x02\xA5\xA6\x05\x85C\x02\xA6\xA7" +
		"\x05w<\x02\xA7\xA8\x05s:\x02\xA8\xA9\x05\x95K\x02\xA9\x04\x03\x02\x02" +
		"\x02\xAA\xAB\x05y=\x02\xAB\xAC\x05\x91I\x02\xAC\xAD\x05\x8BF\x02\xAD\xAE" +
		"\x05\x87D\x02\xAE\x06\x03\x02\x02\x02\xAF\xB0\x05\x93J\x02\xB0\xB1\x05" +
		"\x7F@\x02\xB1\xB2\x05\x89E\x02\xB2\xB3\x05s:\x02\xB3\xB4\x05w<\x02\xB4" +
		"\b\x03\x02\x02\x02\xB5\xB6\x05\x97L\x02\xB6\xB7\x05\x89E\x02\xB7\xB8\x05" +
		"\x95K\x02\xB8\xB9\x05\x7F@\x02\xB9\xBA\x05\x85C\x02\xBA\n\x03\x02\x02" +
		"\x02\xBB\xBC\x05o8\x02\xBC\xBD\x05\x95K\x02\xBD\f\x03\x02\x02\x02\xBE" +
		"\xBF\x05\x9BN\x02\xBF\xC0\x05}?\x02\xC0\xC1\x05w<\x02\xC1\xC2\x05\x91" +
		"I\x02\xC2\xC3\x05w<\x02\xC3\x0E\x03\x02\x02\x02\xC4\xC5\x05\x85C\x02\xC5" +
		"\xC6\x05o8\x02\xC6\xC7\x05\x93J\x02\xC7\xC8\x05\x95K\x02\xC8\x10\x03\x02" +
		"\x02\x02\xC9\xCA\x05o8\x02\xCA\xCB\x05{>\x02\xCB\xCC\x05\x8BF\x02\xCC" +
		"\x12\x03\x02\x02\x02\xCD\xCE\x05\x7F@\x02\xCE\xCF\x05\x89E\x02\xCF\x14" +
		"\x03\x02\x02\x02\xD0\xD1\x07v\x02\x02\xD1\xD2\x07t\x02\x02\xD2\xD3\x07" +
		"w\x02\x02\xD3\xD4\x07g\x02\x02\xD4\x16\x03\x02\x02\x02\xD5\xD6\x07h\x02" +
		"\x02\xD6\xD7\x07c\x02\x02\xD7\xD8\x07n\x02\x02\xD8\xD9\x07u\x02\x02\xD9" +
		"\xDA\x07g\x02\x02\xDA\x18\x03\x02\x02\x02\xDB\xDC\x05\x95K\x02\xDC\xDD" +
		"\x05\x8BF\x02\xDD\xDE\x05u;\x02\xDE\xDF\x05o8\x02\xDF\xE0\x05\x9FP\x02" +
		"\xE0\x1A\x03\x02\x02\x02\xE1\xE2\x05\x9FP\x02\xE2\xE3\x05w<\x02\xE3\xE4" +
		"\x05\x93J\x02\xE4\xE5\x05\x95K\x02\xE5\xE6\x05w<\x02\xE6\xE7\x05\x91I" +
		"\x02\xE7\xE8\x05u;\x02\xE8\xE9\x05o8\x02\xE9\xEA\x05\x9FP\x02\xEA\x1C" +
		"\x03\x02\x02\x02\xEB\xEC\x05\x87D\x02\xEC\xED\x05\x8BF\x02\xED\xEE\x05" +
		"\x89E\x02\xEE\xEF\x05u;\x02\xEF\xF0\x05o8\x02\xF0\xF1\x05\x9FP\x02\xF1" +
		"\x1E\x03\x02\x02\x02\xF2\xF3\x05\x95K\x02\xF3\xF4\x05\x97L\x02\xF4\xF5" +
		"\x05w<\x02\xF5\xF6\x05\x93J\x02\xF6\xF7\x05u;\x02\xF7\xF8\x05o8\x02\xF8" +
		"\xF9\x05\x9FP\x02\xF9 \x03\x02\x02\x02\xFA\xFB\x05\x9BN\x02\xFB\xFC\x05" +
		"w<\x02\xFC\xFD\x05u;\x02\xFD\xFE\x05\x89E\x02\xFE\xFF\x05w<\x02\xFF\u0100" +
		"\x05\x93J\x02\u0100\u0101\x05u;\x02\u0101\u0102\x05o8\x02\u0102\u0103" +
		"\x05\x9FP\x02\u0103\"\x03\x02\x02\x02\u0104\u0105\x05\x95K\x02\u0105\u0106" +
		"\x05}?\x02\u0106\u0107\x05\x97L\x02\u0107\u0108\x05\x91I\x02\u0108\u0109" +
		"\x05\x93J\x02\u0109\u010A\x05u;\x02\u010A\u010B\x05o8\x02\u010B\u010C" +
		"\x05\x9FP\x02\u010C$\x03\x02\x02\x02\u010D\u010E\x05y=\x02\u010E\u010F" +
		"\x05\x91I\x02\u010F\u0110\x05\x7F@\x02\u0110\u0111\x05u;\x02\u0111\u0112" +
		"\x05o8\x02\u0112\u0113\x05\x9FP\x02\u0113&\x03\x02\x02\x02\u0114\u0115" +
		"\x05\x93J\x02\u0115\u0116\x05o8\x02\u0116\u0117\x05\x95K\x02\u0117\u0118" +
		"\x05\x97L\x02\u0118\u0119\x05\x91I\x02\u0119\u011A\x05u;\x02\u011A\u011B" +
		"\x05o8\x02\u011B\u011C\x05\x9FP\x02\u011C(\x03\x02\x02\x02\u011D\u011E" +
		"\x05\x93J\x02\u011E\u011F\x05\x97L\x02\u011F\u0120\x05\x89E\x02\u0120" +
		"\u0121\x05u;\x02\u0121\u0122\x05o8\x02\u0122\u0123\x05\x9FP\x02\u0123" +
		"*\x03\x02\x02\x02\u0124\u0125\x05\x87D\x02\u0125\u0126\x05\x7F@\x02\u0126" +
		"\u0127\x05\x89E\x02\u0127\u0128\x05\x97L\x02\u0128\u0129\x05\x95K\x02" +
		"\u0129\u012B\x05w<\x02\u012A\u012C\x05\x93J\x02\u012B\u012A\x03\x02\x02" +
		"\x02\u012B\u012C\x03\x02\x02\x02\u012C,\x03\x02\x02\x02\u012D\u012E\x05" +
		"}?\x02\u012E\u012F\x05\x8BF\x02\u012F\u0130\x05\x97L\x02\u0130\u0132\x05" +
		"\x91I\x02\u0131\u0133\x05\x93J\x02\u0132\u0131\x03\x02\x02\x02\u0132\u0133" +
		"\x03\x02\x02\x02\u0133.\x03\x02\x02\x02\u0134\u0135\x05u;\x02\u0135\u0136" +
		"\x05o8\x02\u0136\u0138\x05\x9FP\x02\u0137\u0139\x05\x93J\x02\u0138\u0137" +
		"\x03\x02\x02\x02\u0138\u0139\x03\x02\x02\x02\u01390\x03\x02\x02\x02\u013A" +
		"\u013B\x05\x9BN\x02\u013B\u013C\x05w<\x02\u013C\u013D\x05w<\x02\u013D" +
		"\u013F\x05\x83B\x02\u013E\u0140\x05\x93J\x02\u013F\u013E\x03\x02\x02\x02" +
		"\u013F\u0140\x03\x02\x02\x02\u01402\x03\x02\x02\x02\u0141\u0142\x05\x87" +
		"D\x02\u0142\u0143\x05\x8BF\x02\u0143\u0144\x05\x89E\x02\u0144\u0145\x05" +
		"\x95K\x02\u0145\u0147\x05}?\x02\u0146\u0148\x05\x93J\x02\u0147\u0146\x03" +
		"\x02\x02\x02\u0147\u0148\x03\x02\x02\x02\u01484\x03\x02\x02\x02\u0149" +
		"\u014A\x05s:\x02\u014A\u014B\x05\x8BF\x02\u014B\u014C\x05\x97L\x02\u014C" +
		"\u014D\x05\x89E\x02\u014D\u014E\x05\x95K\x02\u014E6\x03\x02\x02\x02\u014F" +
		"\u0150\x05\x87D\x02\u0150\u0151\x05o8\x02\u0151\u0152\x05\x9DO\x02\u0152" +
		"8\x03\x02\x02\x02\u0153\u0154\x05\x87D\x02\u0154\u0155\x05\x7F@\x02\u0155" +
		"\u0156\x05\x89E\x02\u0156:\x03\x02\x02\x02\u0157\u0158\x05o8\x02\u0158" +
		"\u0159\x05q9\x02\u0159\u015A\x05\x93J\x02\u015A<\x03\x02\x02\x02\u015B" +
		"\u015C\x05\x93J\x02\u015C\u015D\x05\x97L\x02\u015D\u015E\x05\x87D\x02" +
		"\u015E>\x03\x02\x02\x02\u015F\u0160\x05o8\x02\u0160\u0161\x05\x99M\x02" +
		"\u0161\u0162\x05{>\x02\u0162@\x03\x02\x02\x02\u0163\u0164\x05\x95K\x02" +
		"\u0164\u0165\x05\x7F@\x02\u0165\u0166\x05\x87D\x02\u0166\u0167\x05w<\x02" +
		"\u0167\u0168\x05\x93J\x02\u0168\u0169\x05w<\x02\u0169\u016A\x05\x91I\x02" +
		"\u016A\u016B\x05\x7F@\x02\u016B\u016C\x05w<\x02\u016C\u016D\x05\x93J\x02" +
		"\u016DB\x03\x02\x02\x02\u016E\u016F\x05w<\x02\u016F\u0170\x05\x99M\x02" +
		"\u0170\u0171\x05w<\x02\u0171\u0172\x05\x91I\x02\u0172\u0173\x05\x9FP\x02" +
		"\u0173D\x03\x02\x02\x02\u0174\u0175\x05y=\x02\u0175\u0176\x05o8\x02\u0176" +
		"\u0177\x05s:\x02\u0177\u0178\x05w<\x02\u0178\u0179\x05\x95K\x02\u0179" +
		"F\x03\x02\x02\x02\u017A\u017B\x05o8\x02\u017B\u017C\x05\x89E\x02\u017C" +
		"\u017D\x05u;\x02\u017DH\x03\x02\x02\x02\u017E\u017F\x05\x8BF\x02\u017F" +
		"\u0180\x05\x91I\x02\u0180J\x03\x02\x02\x02\u0181\u0185\t\x02\x02\x02\u0182" +
		"\u0184\t\x03\x02\x02\u0183\u0182\x03\x02\x02\x02\u0184\u0187\x03\x02\x02" +
		"\x02\u0185\u0183\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186L\x03" +
		"\x02\x02\x02\u0187\u0185\x03\x02\x02\x02\u0188\u018A\t\x04\x02\x02\u0189" +
		"\u0188\x03\x02\x02\x02\u018A\u018B\x03\x02\x02\x02\u018B\u0189\x03\x02" +
		"\x02\x02\u018B\u018C\x03\x02\x02\x02\u018CN\x03\x02\x02\x02\u018D\u0191" +
		"\x07)\x02\x02\u018E\u0190\n\x05\x02\x02\u018F\u018E\x03\x02\x02\x02\u0190" +
		"\u0193\x03\x02\x02\x02\u0191\u018F\x03\x02\x02\x02\u0191\u0192\x03\x02" +
		"\x02\x02\u0192\u0194\x03\x02\x02\x02\u0193\u0191\x03\x02\x02\x02\u0194" +
		"\u0195\x07)\x02\x02\u0195P\x03\x02\x02\x02\u0196\u0197\x07*\x02\x02\u0197" +
		"R\x03\x02\x02\x02\u0198\u0199\x07+\x02\x02\u0199T\x03\x02\x02\x02\u019A" +
		"\u019B\x07,\x02\x02\u019BV\x03\x02\x02\x02\u019C\u019D\x071\x02\x02\u019D" +
		"X\x03\x02\x02\x02\u019E\u019F\x07-\x02\x02\u019FZ\x03\x02\x02\x02\u01A0" +
		"\u01A1\x07/\x02\x02\u01A1\\\x03\x02\x02\x02\u01A2\u01A3\x07?\x02\x02\u01A3" +
		"^\x03\x02\x02\x02\u01A4\u01A5\x07#\x02\x02\u01A5\u01A6\x07?\x02\x02\u01A6" +
		"`\x03\x02\x02\x02\u01A7\u01A8\x07@\x02\x02\u01A8b\x03\x02\x02\x02\u01A9" +
		"\u01AA\x07@\x02\x02\u01AA\u01AB\x07?\x02\x02\u01ABd\x03\x02\x02\x02\u01AC" +
		"\u01AD\x07>\x02\x02\u01ADf\x03\x02\x02\x02\u01AE\u01AF\x07>\x02\x02\u01AF" +
		"\u01B0\x07?\x02\x02\u01B0h\x03\x02\x02\x02\u01B1\u01B2\x07.\x02\x02\u01B2" +
		"j\x03\x02\x02\x02\u01B3\u01B4\x07/\x02\x02\u01B4\u01B5\x07/\x02\x02\u01B5" +
		"\u01B9\x03\x02\x02\x02\u01B6\u01B8\n\x06\x02\x02\u01B7\u01B6\x03\x02\x02" +
		"\x02\u01B8\u01BB\x03\x02\x02\x02\u01B9\u01B7\x03\x02\x02\x02\u01B9\u01BA" +
		"\x03\x02\x02\x02\u01BA\u01BC\x03\x02\x02\x02\u01BB\u01B9\x03\x02\x02\x02" +
		"\u01BC\u01BD\b6\x02\x02\u01BDl\x03\x02\x02\x02\u01BE\u01BF\t\x07\x02\x02" +
		"\u01BF\u01C0\x03\x02\x02\x02\u01C0\u01C1\b7\x02\x02\u01C1n\x03\x02\x02" +
		"\x02\u01C2\u01C3\t\b\x02\x02\u01C3p\x03\x02\x02\x02\u01C4\u01C5\t\t\x02" +
		"\x02\u01C5r\x03\x02\x02\x02\u01C6\u01C7\t\n\x02\x02\u01C7t\x03\x02\x02" +
		"\x02\u01C8\u01C9\t\v\x02\x02\u01C9v\x03\x02\x02\x02\u01CA\u01CB\t\f\x02" +
		"\x02\u01CBx\x03\x02\x02\x02\u01CC\u01CD\t\r\x02\x02\u01CDz\x03\x02\x02" +
		"\x02\u01CE\u01CF\t\x0E\x02\x02\u01CF|\x03\x02\x02\x02\u01D0\u01D1\t\x0F" +
		"\x02\x02\u01D1~\x03\x02\x02\x02\u01D2\u01D3\t\x10\x02\x02\u01D3\x80\x03" +
		"\x02\x02\x02\u01D4\u01D5\t\x11\x02\x02\u01D5\x82\x03\x02\x02\x02\u01D6" +
		"\u01D7\t\x12\x02\x02\u01D7\x84\x03\x02\x02\x02\u01D8\u01D9\t\x13\x02\x02" +
		"\u01D9\x86\x03\x02\x02\x02\u01DA\u01DB\t\x14\x02\x02\u01DB\x88\x03\x02" +
		"\x02\x02\u01DC\u01DD\t\x15\x02\x02\u01DD\x8A\x03\x02\x02\x02\u01DE\u01DF" +
		"\t\x16\x02\x02\u01DF\x8C\x03\x02\x02\x02\u01E0\u01E1\t\x17\x02\x02\u01E1" +
		"\x8E\x03\x02\x02\x02\u01E2\u01E3\t\x18\x02\x02\u01E3\x90\x03\x02\x02\x02" +
		"\u01E4\u01E5\t\x19\x02\x02\u01E5\x92\x03\x02\x02\x02\u01E6\u01E7\t\x1A" +
		"\x02\x02\u01E7\x94\x03\x02\x02\x02\u01E8\u01E9\t\x1B\x02\x02\u01E9\x96" +
		"\x03\x02\x02\x02\u01EA\u01EB\t\x1C\x02\x02\u01EB\x98\x03\x02\x02\x02\u01EC" +
		"\u01ED\t\x1D\x02\x02\u01ED\x9A\x03\x02\x02\x02\u01EE\u01EF\t\x1E\x02\x02" +
		"\u01EF\x9C\x03\x02\x02\x02\u01F0\u01F1\t\x1F\x02\x02\u01F1\x9E\x03\x02" +
		"\x02\x02\u01F2\u01F3\t \x02\x02\u01F3\xA0\x03\x02\x02\x02\u01F4\u01F5" +
		"\t!\x02\x02\u01F5\xA2\x03\x02\x02\x02\f\x02\u012B\u0132\u0138\u013F\u0147" +
		"\u0185\u018B\u0191\u01B9\x03\x02\x03\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!AqlLexer.__ATN) {
			AqlLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(AqlLexer._serializedATN));
		}

		return AqlLexer.__ATN;
	}

}

