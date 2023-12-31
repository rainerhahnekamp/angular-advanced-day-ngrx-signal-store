import { filter, Observable } from 'rxjs';
import { isDefined } from '@app/shared/util';

export function filterDefined<T>(
  source$: Observable<T>,
): Observable<NonNullable<T>> {
  return source$.pipe(filter(isDefined));
}
