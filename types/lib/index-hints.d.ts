/**
 * Available index hints to be used for querying data in MySQL for index hints.
 */
declare enum IndexHints {
  USE = 'USE',
  FORCE = 'FORCE',
  IGNORE = 'IGNORE'
}

export = IndexHints;
