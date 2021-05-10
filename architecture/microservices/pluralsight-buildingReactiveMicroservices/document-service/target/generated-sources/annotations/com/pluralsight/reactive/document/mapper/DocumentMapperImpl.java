package com.pluralsight.reactive.document.mapper;

import com.pluralsight.reactive.document.model.domain.Document;
import com.pluralsight.reactive.document.model.dto.DocumentDto;
import java.util.ArrayList;
import java.util.Collection;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2021-05-10T20:24:50+0100",
    comments = "version: 1.3.1.Final, compiler: Eclipse JDT (IDE) 1.3.1300.v20210331-0708, environment: Java 11.0.11 (AdoptOpenJDK)"
)
@Component
public class DocumentMapperImpl implements DocumentMapper {

    @Override
    public DocumentDto asDto(Document document) {
        if ( document == null ) {
            return null;
        }

        DocumentDto documentDto = new DocumentDto();

        return documentDto;
    }

    @Override
    public Collection<DocumentDto> asDto(Collection<Document> documents) {
        if ( documents == null ) {
            return null;
        }

        Collection<DocumentDto> collection = new ArrayList<DocumentDto>( documents.size() );
        for ( Document document : documents ) {
            collection.add( asDto( document ) );
        }

        return collection;
    }
}
